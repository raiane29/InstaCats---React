import './main.css'
import img01 from '/img-01.png'
import img02 from '/img-02.png'
import img03 from '/img-03.png'
import img04 from '/img-04.png'
import img05 from '/img-05.png'
import img06 from '/img-06.png'
import img07 from '/img-07.png'
import img08 from '/img-08.png'
import img09 from '/img-09.png'
import img10 from '/img-10.png'
import img11 from '/img-11.png'
import img12 from '/img-12.png'

const Main = () => {
    return(
        <main>
            <section>
        <ul className='linha1'>
            <li><img src={img01}/></li>
            <li><img src={img02}/></li>
            <li><img src={img03} /></li>
        </ul>
        <ul className='linha2'>
            <li><img src={img04}/></li>
            <li><img src={img05}/></li>
        </ul >
        <ul className = 'linha3'>
            <li><img src={img06}/></li>
        </ul>
{/* -------------------------------------------------------- */}
        <ul className='linha1'>
            <li><img src={img07}/></li>
            <li><img src={img08}/></li>
            <li><img src={img09} /></li>
        </ul>
        <ul className='linha2'>
            <li><img src={img10}/></li>
            <li><img src={img11}/></li>
        </ul>
        <ul className = 'linha3'>
            <li><img src={img12}/></li>
        </ul>
        </section>
    </main>
    )
}

export default Main