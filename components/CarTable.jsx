import { useEffect } from 'react'; 
import { connect } from 'react-redux';
import { Table } from 'antd';
import { fetchCars } from '../redux/store';

const columns = [
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => {
      return <div>
        <div className="car-table__title">{record.title}</div>
        <div className="car-table__description">{record.description}</div>
      </div>
    },
  },
  {
    title: 'Год',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Цвет',
    dataIndex: 'color',
    key: 'color',
    render: (color) => {
      return <div className="car-table__color" style={{backgroundColor: color}}/>
    },
    align: 'center',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      if (status == 'pednding') {
        return 'Ожидается';
      } else if (status == 'in_stock') {
        return 'В наличии';
      } else if (status == 'out_of_stock') {
        return 'Нет в наличии';
      } else {
        return 'Неизвестно';
      }
    },
    width: '120px',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    render: (price, record) => (
      price.toLocaleString("ru")+' руб.'
    ),
    width: '120px',
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <span className="car-table__action">Удалить</span>
    ),
    width: '100px',
  },
];

const CarTable = (props) => {
  const { className, cars, getCars } = props;

  useEffect(()=>{
    getCars();
  }, []);

	return (
		<div className={`car-table ${className}`}>
			<Table 
				columns={columns}
				dataSource={cars} rowKey="id"
				className="car-table__table"
				pagination={false}
				// scroll={{ y: 300 }}
				// summary={summary}
			/>

			<style jsx global>{`
        .car-table {

					&__caption {
						font-size: 18px;
					}

          &__table {
						width: 100%;
          }

          & .ant-table-thead tr th {
            background-color: #c4092f;
            font-size: 15px;
            color: #fff;
            font-weight: 500;
            padding: 12px 6px;

            &:first-of-type {
              padding-left: 15px;
            }
          }

          & .ant-table-tbody tr td {
            background-color: #f5f6f6;
            vertical-align: top;
            font-size: 15px;
            color: #323232;
            font-weight: 300;
            padding: 12px 6px;

            &:first-of-type {
              padding-left: 15px;
            }
          }

          &__color {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            border: 1px solid #e5e5e5; 
          }

          &__title {
            max-width: 200px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          &__description {
            font-size: 13px;
            color: #8b9497;
          }

          &__action {
            font-size: 14px;
            color: #8b9497;
            padding: 6px 15px;

            &:hover {
              background-color: #000;
              color: #ffffff;
              border-radius: 12px;
            }
          }

				}
				
			`}</style>
		</div>
	)
}


const mapStateToProps = (store) => {
  console.log(store.cars);
  return {
  cars: store.cars,
}};

const mapDispatchToProps = dispatch => ({
  getCars: () => fetchCars(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarTable);