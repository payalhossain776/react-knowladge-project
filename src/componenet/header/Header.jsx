import profaile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 border-black'>
              <h1 className='text-4xl font-bold '>knowladge cafe </h1>
              <img src={profaile} alt=""/>
        </header>
    );
};

export default Header;