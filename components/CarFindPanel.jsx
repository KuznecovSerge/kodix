import { connect } from 'react-redux';
import { addCar } from '../redux/store';
import { Form, Select } from 'antd';
import DkInput from './DkInput';
import DkInputNumber from './DkInputNumber';
import DkSelect from './DkSelect';
import DkSelectColor from './DkSelectColor';
import DkButton from './DkButton';

const { Option } = Select;

// Компонент назван "Панель поиска", потому что на первый взгляд это был точно фильтр для поиска :)
// Название оставил, но сейчас он добавляет в таблицу новый авто

const CarFindPanel = (props) => {
  const { className, cars, add } = props;

  const onFinish = values => {
    const nextId = Math.max.apply(null, cars.map(item => item.id)) + 1 ;
    add({...values, id: nextId});
  };

  const rules = {
    name: [
      {
        required: true,
        message: 'Укажите название',
      },
    ],
    year: [
      {
        required: true,
        message: 'Укажите год',
      },
    ],
    required: [
      {
        required: true,
        message: 'Поле должно быть заполнено',
      },
    ],
  }

  return (
		<div className={`carfindpanel ${className}`}>
			<Form className="duck-form" onFinish={onFinish}>
        <div className="carfindpanel__row1">
          <Form.Item className="carfindpanel__row1col" name="title" rules={rules.name}>
            <DkInput label="Название" />
          </Form.Item>
          <Form.Item className="carfindpanel__row1col" name="year" rules={rules.year}>
            <DkInput label="Год" type="number" />
          </Form.Item>
          <Form.Item className="carfindpanel__row1col" name="price" rules={rules.required}>
            <DkInputNumber
              label="Цена"
              formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            />
          </Form.Item>
        </div>
        <Form.Item name="description" rules={rules.required}>
            <DkInput label="Описание" />
        </Form.Item>
        <div className="carfindpanel__row3" rules={rules.required}>
          <Form.Item className="carfindpanel__row3col" name="color">
            <DkSelectColor label="Цвет" />
          </Form.Item>
          <Form.Item className="carfindpanel__row3col" name="status" rules={rules.required}>
            <DkSelect label="Состояние">
              <Option value="in_stock">В наличии</Option>
              <Option value="pednding">Ожидается</Option>
              <Option value="out_of_stock">Нет в наличии</Option>
            </DkSelect>
          </Form.Item>
          <Form.Item className="carfindpanel__row3col">
            <DkButton 
              type="primary"
              htmlType="submit"
              className="carfindpanel__submit"
              >Отправить
            </DkButton>
          </Form.Item>
        </div>
			</Form>
      <style jsx global>{`
        .carfindpanel {
          width: 100%;

          &__row1 {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap-reverse;
            justify-content: flex-end;
            margin-left: -10px;
            margin-right: -10px;
          }
          &__row1col {
            flex: 150px;
            margin-left: 10px;
            margin-right: 10px;
            
            &:first-child {
              order: 1;
            }
            &:last-child {
              order: -1;
            }
          }

          &__row3 {
            display: flex;
            flex-wrap: wrap;
            margin-left: -10px;
            margin-right: -10px;
          }
          &__row3col {
            flex: 150px;
            margin-left: 10px;
            margin-right: 10px;            
          }

          &__submit {
            width: 100%;
          }

          
        }
        `}</style>
		</div>
  )
}

const mapStateToProps = (store) => ({ cars: store.cars });

const mapDispatchToProps = dispatch => ({
  add: (data) => dispatch(addCar(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarFindPanel);