import Menu from "../../componentes/Menu/Menu";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Card from "../../componentes/Card/Card"
import { SectionStyle } from "./style";



function Home() {


  


    return (
        <>
            <HeaderPerfil />

            <SectionStyle>
                <Menu />
                <Card />

                {/* <Historicos /> */}

            </SectionStyle>

        </>
    )
}


export default Home