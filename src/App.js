import netImg from './assets/netlify-logo-png-transparent.png'

const App = () => {
    return (
        <div>
            <div className="mid-center">
                <img
                    src={netImg}
                    alt="logo"
                    style={{ width: '80px', position: 'absolute', left: '-100px', top: '15px' }}
                />
                <h1>Netlify</h1>
                <h2>Test with React</h2>
            </div>
        </div>
    )
}

export default App
