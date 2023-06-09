const Carousel = () => {
    return (
        <div className='h-1/2 flex-col flex-between px-4'>
            <div className='flex flex-row w-full items-center'>
                <div className="border-b border-green-900 flex-grow w-full m-5"></div>
                <h1 className='titulos max-md:text-[250%] bold font-jura'>AMIGXS</h1>
                <div className="border-b border-green-900 flex-grow w-full m-5"></div>
            </div>
            <div className="slider w-full px-4">
                <div className='slide-track'>
                    <div className='slide'>
                        <img className='w-full h-full'
                            src="../assets/images/amigxs/alpogo.png"
                            alt="alpogo" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full'
                            src="../assets/images/amigxs/pdg.png"
                            alt="pielldegallina" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full'
                            src="../assets/images/amigxs/pezvolcan.png"
                            alt="pez volcan" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full'
                            src="../assets/images/amigxs/quality.png"
                            alt="quality" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full hover:translate-z-20'
                            src="../assets/images/amigxs/alpogo.png"
                            alt="alpogo" />
                    </div>
                    <div className='slide hover:translate-z-20'>
                        <img className='w-full h-full hover:translate-z-20'
                            src="../assets/images/amigxs/pdg.png"
                            alt="pielldegallina" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full hover:translate-z-20'
                            src="../assets/images/amigxs/pezvolcan.png"
                            alt="pez volcan" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full '
                            src="../assets/images/amigxs/quality.png"
                            alt="quality" />
                    </div>
                </div>
                <div className="border-b border-green-900 flex-grow w-full py-4"></div>
            </div>
        </div>
    )
}

export default Carousel