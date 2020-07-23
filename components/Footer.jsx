export default function Footer() {
    return (
      <footer>
        <a
          href="https://github.com/KuznecovSerge"
          target="_blank"
          rel="noopener noreferrer"
        >
          © CAPTAIN QUACK<br/>
					Десница тысячеления и моллюск!
        </a>

				<style jsx>{`
					footer {
						width: 100%;
						height: 100px;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #282d30;
						font-size: 11px;
						color: #ffffff;
						font-weight: 300;
					}

					footer a {
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
					}

					a {
						color: inherit;
						text-decoration: none;
					}
        `}</style>
      </footer>
    )
  }
  