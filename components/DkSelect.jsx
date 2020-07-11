import { useState, useEffect } from 'react';
import { Select } from 'antd';
import omit from 'lodash/omit';

export default function DkSelect(props) {
  const { label, defaultValue, onChange } = props;
  const [labelUp, setlabelUp] = useState(false);

  const handleChange = (evt) => {
    setlabelUp(evt ? true : false);
    if (onChange) {
      onChange(evt);
    }
  }

  useEffect(() => {
    setlabelUp(defaultValue ? true : false);
  }, [defaultValue]);

  const inputProps = omit(props, 'onChange');

  return (
    <div className="dkselect">
      <span className={labelUp ? 'dkselect__label dkselect__label--up' : 'dkselect__label'}>{label}</span>
      <Select 
        className="dkselect__select"
        dropdownClassName="dkselect__dropdown"
        onChange={handleChange}
        {...inputProps}
      >
        {props.children}
      </Select>

      <style jsx global>{`
        .dkselect {
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

          &__select {
            &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
              height: 40px;
              border-bottom-width: 2px;
              border-bottom-style: solid;
              background-color: transparent;
              box-shadow: none;
            
              &:hover {
                border-color: #d9d9d9;
                border-bottom-color: #c4092f;
                box-shadow: none;
              }
            }
            &.ant-select-open .ant-select-selector {
              border-color: #d9d9d9;
              border-bottom-color: #111;
            }
            &.ant-select-focused.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
              border-color: #d9d9d9;
              border-bottom-color: #111;
            }
            .ant-select-selection-item {
              font-size: 12px;
              line-height: 38px;
              color: #999999;

              &:hover {
                opacity:inherit;
              }
            }
            &.ant-select-single .ant-select-selector .ant-select-selection-item {
              line-height: 38px;
            }
          }

          &__dropdown {
            .ant-select-item {
              font-size: 12px;
              color: #999999;
            }
            .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
              background-color: inherit;
              color: #111;
              font-weight: 600;
            }
            .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
              background-color: inherit;
              font-weight: inherit;
              &:hover {
                font-weight: 600;
              }
            }

          }

        }

      `}</style>
    </div>
  )
}
