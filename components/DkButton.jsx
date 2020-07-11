import { Button } from 'antd';

export default function DkButton(props) {

  return (
    <div className="dkbutton">
      <Button {...props}/>

      <style jsx global>{`
        .dkbutton {
          position: relative;

          .ant-btn {
            height: 40px;
            font-size: 16px;
            line-height: 30px;
            color: #ffffff;
            font-weight: 700;
          }
          .ant-btn-primary {
            background-color: #c4092f;
            border-color: #c4092f;
          }
          
        }
      `}</style>
    </div>
  )
}
