import './about.css'

const about = () => {
  return (
    <div className='a'>
    <div className='a-left'>
        <div className="a-card bg"></div>
        <div className="a-card">
            <img 
            src='https://i.imgur.com/SnLBy6j.png' 
            className='a-img'
            alt='temp gif'
            />
        </div>

    </div>
    <div className='a-right'>
        <h1 className='a-title'>about me</h1>
        <p className='a-sub'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    <p className="a-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis. Amet nisl
            suscipit adipiscing bibendum est ultricies integer quis auctor.
            Aenean sed adipiscing diam donec adipiscing tristique risus nec
            feugiat.
            </p>
    </div>

    </div>
  )
}

export default about