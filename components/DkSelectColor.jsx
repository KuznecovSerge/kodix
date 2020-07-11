import { Radio } from 'antd';

export default function DkSelectColor(props) {

  const { label } = props;

  return (
    <div className="dkcolor">
      <span className="dkcolor__label">{label}</span>
      <Radio.Group className="dkcolor__color" {...props}>
        <Radio.Button value="a" style={{'background-color' : '#fff'}}/>
        <Radio.Button value="b" style={{'background-color' : '#000'}}/>
        <Radio.Button value="c" style={{'background-color' : '#cbcbcc'}}/>
        <Radio.Button value="d" style={{'background-color' : '#d74345'}}/>
        <Radio.Button value="e" style={{'background-color' : '#88c504'}}/>
      </Radio.Group>

      <style jsx global>{`
        .dkcolor {
          position: relative;

          &__label {
            position: absolute;
            left: 0px;
            top: -20px;
            color: #cbcbcc;
            font-size: 12px;

          }

          &__color {
            .ant-radio-button-wrapper {
              border-radius: 20px;
              padding: 0px;
              width: 20px;
              height: 20px;
              margin-left: 20px;
              border-left-width: 1px;

              &::before {
                display:none;
              }
              &:first-child {
                margin-left: 0px;
              }
              &-checked, &-checked:hover, &-checked:focus, &-checked:focus-within {
                box-shadow: 0 0 0 3px red;
                border-color: transparent;
              }
            }
          }
          
          &__color.ant-radio-group {
            display: inline-flex;
            align-items: center;
            height: 40px;
          }            


        }

      `}</style>
    </div>
  )
}
