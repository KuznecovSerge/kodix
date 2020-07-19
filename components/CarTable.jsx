import { connect } from 'react-redux';
import { Table, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => {
      return <div>
        <div>{record.title}</div>
        <div>{record.description}</div>
      </div>
    }
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
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
  },
];

const CarTable = (props) => {
  const { className, cars } = props;

	return (
		<div className={`car-table ${className}`}>
			<Table 
				columns={columns}
				dataSource={cars} rowKey="id"
				className="car-table__table"
				size="small" 
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
						width: 100%
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

export default connect(mapStateToProps, null)(CarTable);