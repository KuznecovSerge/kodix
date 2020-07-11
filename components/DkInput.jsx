import { useState, useEffect } from 'react';
import { Input } from 'antd';
import omit from 'lodash/omit';

export default function DkInput(props) {
  const { label, defaultValue, onChange } = props;
  const [labelUp, setlabelUp] = useState(false);

  const handleChange = (evt) => {
    setlabelUp(evt.target.value ? true : false);
    if (onChange) {
      onChange(evt);
    }
  }

  useEffect(() => {
    setlabelUp(defaultValue ? true : false);
  }, [defaultValue]);

  const inputProps = omit(props, 'onChange');

  return (
    <div className="dkinput">
      <span className={labelUp ? 'dkinput__label dkinput__label--up' : 'dkinput__label'}>{label}</span>
      <Input className="dkinput__input" onChange={handleChange} {...inputProps}/>

      <style jsx global>{`
        .dkinput {
          position: relative;

          &__label {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translate(0, -50%);
            color: #cbcbcc;
            font-size: 12px;
            transition-duration: 0.2s;

            &--up {
              top: -20px;
              transform: none;
            }
          }

          &__input {
            height: 40px;
            border-bottom-width: 2px;
            border-bottom-style: solid;
            font-size: 12px;
            line-height: 18px;
            color: #999999;
            background-color: transparent;
          
            &:hover {
              border-color: #d9d9d9;
              border-bottom-color: #c4092f;
              box-shadow: none;
            }
            &:focus {
              border-color: #d9d9d9;
              border-bottom-color: #111;
              box-shadow: none;
            }
          }
          
        }
      `}</style>
    </div>
  )
}
