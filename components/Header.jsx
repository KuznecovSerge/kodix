export default function Header() {
    return (
      <div className="header">

        <div className="logo">
            <img src="images/captain-duck.png" />
        </div>
  
        <style jsx>{`
          .header {
            max-height: 102px;
            width: 100%;
            background: #282d30;
            display: flex;
            justify-content: center;
          }

          .logo img {
						position: relative;
						top: 6px;
						max-width: 100%;
						height: auto;
						padding: 0 0.5rem;						
          }
  
  
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
  
      </div>
    )
  }
  