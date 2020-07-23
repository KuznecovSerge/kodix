import { useEffect } from 'react'; 
import { connect } from 'react-redux';
import { Table } from 'antd';
import { fetchCars, removeCar } from '../redux/store';

const { Column } = Table;

const CarTable = (props) => {
  const { className, cars, getCars, delCar } = props;

  useEffect(()=>{
    getCars();
  }, []);

	return (
		<div className={`car-table ${className}`}>
			<Table 
				dataSource={cars} rowKey="id"
				className="car-table__table"
				pagination={false}
			>
        <Column title="Название" dataIndex="title" key="title" 
          render={(text, record) => {
            return <div style={{overflow: 'hidden'}}>
              <div className="car-table__title">{record.title}</div>
              <div className="car-table__description">{record.description}</div>
            </div>
          }}
        />
        <Column title="Год" dataIndex="year" key="year"/>
        <Column title="Цвет" dataIndex="color" key="color" align="center"
          render={ color => <div className="car-table__color" style={{backgroundColor: color}}/> }
        />
        <Column title="Статус" dataIndex="status" key="status" width="120px"
          render={ status => {
            if (status == 'pednding') {
              return 'Ожидается';
            } else if (status == 'in_stock') {
              return 'В наличии';
            } else if (status == 'out_of_stock') {
              return 'Нет в наличии';
            } else {
              return 'Неизвестно';
            }
          }}
        />
        <Column title="Цена" dataIndex="price" key="price" width="120px"
          render={ price => `${price.toLocaleString("ru")} руб.` }
        />
        <Column title="" key="action" width="100px"
          render={ (text, record) => 
            <span 
              className="car-table__action"
              onClick={()=>delCar(record.id)}
              >Удалить
            </span> 
          }
        />
      </Table>

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
            border-bottom: 1px solid #e6e9ea;
          }

          & .ant-table-cell:nth-child(1) {
            padding-left: 15px;
          }

          &__color {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            border: 1px solid #e5e5e5; 
          }

          &__title {
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
              background-color: #282d30;
              color: #ffffff;
              border-radius: 12px;
            }
          }


          @media (max-width: 720px) {
            & .ant-table-thead {
              display: none;
            }

            & .ant-table-row {
              display: flex;
              flex-wrap: wrap;

            }

            & .ant-table-cell {
              &:nth-child(1) {
                flex: 10 1 calc(100% - 167px);
                order: 1;
                padding-left: 6px;
                border-bottom: none;
              }
              &:nth-child(2) {
                flex: 0 0 43px;
                order: 4;
              }
              &:nth-child(3) {
                flex: 0 0 47px;
                order: 2;
                border-bottom: none;
              }
              &:nth-child(4) {
                flex: 0 0 120px;
                order: 5;
              }
              &:nth-child(5) {
                flex: 0 0 120px;
                order: 3;
                border-bottom: none;
              }
              &:nth-child(6) {
                flex: 1 0 100px;
                text-align: end;
                order: 6;
                padding-right: 14px;
              }
            }

            &__action {
              background-color: #282d30;
              color: #ffffff;
              border-radius: 12px;
            }
          }

				}
				
			`}</style>
		</div>
	)
}


const mapStateToProps = (store) => ({ cars: store.cars });

const mapDispatchToProps = dispatch => ({
  getCars: () => fetchCars(dispatch),
  delCar: (index) => dispatch(removeCar(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarTable);