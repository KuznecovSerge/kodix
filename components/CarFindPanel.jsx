import { connect } from 'react-redux';
import { fetchCars } from '../redux/store';
import { Form, Select } from 'antd';
import DkInput from './DkInput';
import DkSelect from './DkSelect';
import DkSelectColor from './DkSelectColor';
import DkButton from './DkButton';

const { Option } = Select;

const CarFindPanel = (props) => {
  const { className, fetchCars } = props;

  return (
		<div className={`carfindpanel ${className}`}>
			<Form className="duck-form"
      >
        <div className="carfindpanel__row1">
          <Form.Item className="carfindpanel__row1col">
            <DkInput label="Название" />
          </Form.Item>
          <Form.Item className="carfindpanel__row1col">
            <DkInput label="Год" />
          </Form.Item>
          <Form.Item className="carfindpanel__row1col">
            <DkInput label="Цена" />
          </Form.Item>
        </div>
        <Form.Item>
            <DkInput label="Описание" />
        </Form.Item>
        <div className="carfindpanel__row3">
          <Form.Item className="carfindpanel__row3col">
            <DkSelectColor label="Цвет" />
          </Form.Item>
          <Form.Item className="carfindpanel__row3col">
            <DkSelect label="Состояние">
              <Option value="lucy">В наличии</Option>
              <Option value="lucy2">Ожидается</Option>
              <Option value="lucy3">Нет в наличии</Option>
            </DkSelect>
          </Form.Item>
          <Form.Item className="carfindpanel__row3col">
            <DkButton 
              type="primary"
              className="carfindpanel__submit"
              onClick={fetchCars}
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

const mapDispatchToProps = dispatch => ({
  fetchCars: () => fetchCars(dispatch),
});

export default connect(null, mapDispatchToProps)(CarFindPanel);