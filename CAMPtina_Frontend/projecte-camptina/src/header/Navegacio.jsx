import { Link } from '../Link.jsx'
import logo from '../assets/logo.png'
import usuari from '../assets/user.png'
import menu from '../assets/menu.png'

export const Navegacio = () => {
    const className_header_navegacio = 'cn-header-navegacio';
    const className_section_nav_navegacio = 'cn-section-nav-navegacio';
    const className_section_usuari_navegacio = 'cn-section-usuari-navegacio';
    const className_article_usuari_ui_navegacio = 'cn-article-usuari-ui-navegacio';
    const className_article_usuari_imatge_navegacio = 'cn-article-usuari-imatge-navegacio';
    const className_div_usuari_ui_nom_edat_navegacio = 'cn-div-usuari-ui-nom-edat-navegacio';
    const className_div_usuari_ui_detalls_navegacio = 'cn-div-usuari-ui-detalls-navegacio';
    const className_img_logo = 'cn-img-logo';
    const className_img_usuari = 'cn-img-usuari';

    const className_num_li_2 = 'cn-num-li-2-navegacio';
    const className_num_li_3 = 'cn-num-li-3-navegacio';

    const txt_NOM_COMPLET = 'Albert Rodríguez';
    const txt_EDAT = '26';
    const txt_USUARI = 'albyroez';
    const txt_CC = '5 CC';
    const txt_EXP = 'JU';

    return (
        <>
            <header className={className_header_navegacio}>
                <section className={className_section_nav_navegacio}>
                    <Link to='/'><img className={className_img_logo} src={logo} alt="Logo" /></Link>
                    <nav>
                        <ul>
                            <li><Link to='/'>Inici</Link></li>
                            <li>
                                <Link to='/apats'>Àpats</Link>
                                <ul className={className_num_li_3}>
                                    <li><Link to='/apats/menus'>Menús</Link></li>
                                    <li><Link to='/apats/triar-apat'>Triar Àpat</Link></li>
                                    <li><Link to='/apats/crear-apat'>Crear Àpat</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/equip'>Equip</Link>
                                <ul className={className_num_li_2}>
                                    <li><Link to='/equip/equip-dev'>Equip DEV</Link></li>
                                    <li><Link to='/equip/gerent'>Gerent</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/contacte'>Contacte</Link></li>
                        </ul>
                    </nav>
                </section>
                <section className={className_section_usuari_navegacio}>
                    <article className={className_article_usuari_ui_navegacio}>
                        <div className={className_div_usuari_ui_nom_edat_navegacio}>
                            <h4>{txt_NOM_COMPLET}</h4>
                            <p>{txt_EDAT}</p>
                        </div>
                        <div className={className_div_usuari_ui_detalls_navegacio}>
                            <h4>{txt_USUARI}</h4>
                            <p>{txt_CC}</p>
                            <p>{txt_EXP}</p>
                        </div>
                    </article>
                    <article className={className_article_usuari_imatge_navegacio}>
                        <Link to='/login'><img className={className_img_usuari} src={usuari} alt="Usuari" /></Link>
                    </article>
                </section>
            </header>
        </>
    )
    
}