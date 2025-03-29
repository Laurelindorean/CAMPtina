import { Link } from '../Link'
import logo_dark from '../assets/user_dark.png'

const i18n = {
    ca: {
        txt_user: 'Usuari',
        txt_password: 'Contrasenya',
        txt_submit: 'Accés'
    },
    es: {
        txt_user: 'Usuario',
        txt_password: 'Contraseña',
        txt_submit: 'Acceso'
    },
    en: {
        txt_user: 'User',
        txt_password: 'Password',
        txt_submit: 'Access'
    }
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function Login({ routeParams }) {

    const i18n = useI18n(routeParams.lang ?? 'ca')

    const className_main = 'cn-main-login';

    const className_section = 'cn-section-login';

    const className_article_main = 'cn-article-main-login';
    const className_article_footer = 'cn-article-footer-login';

    const className_img = 'cn-logo-login';
    const title_form = 'CAMPtina';

    const className_form = 'cn-form-login';
    const id_form = 'id_form_login';
    const method_form = 'post';
    const action_form = '';

    const className_inputs = 'cn-inputs-login';

    const txt_label_user = i18n.txt_user;
    const txt_label_password = i18n.txt_password;

    const id_input_user = 'id_user_login';
    const name_input_user = 'nameUser';
    const id_input_password = 'id_password_login';
    const name_input_password = 'namePassword';

    const id_bttn_submit = 'id_access_login';
    const value_bttn_submit = i18n.txt_submit;

    const className_span = 'span-form-login';

    const a_footer = 'Forgot your password?';
    const p_footer = 'Don\'t have an account?';
    const txt_signup = 'Sign Up';

    return (
        <>
            <main className={className_main}>
                <section className={className_section}>
                    <article className={className_article_main}>
                        <img className={className_img} src={logo_dark} alt='Logo'/>
                        <h3>{title_form}</h3>
                        <form className={className_form} id={id_form} method={method_form} action={action_form}>
                            <div>
                                <label htmlFor={id_input_user}>{txt_label_user}</label>
                                <input
                                    className={className_inputs}
                                    id={id_input_user}
                                    name={name_input_user}
                                    type='text'
                                    required
                                    autoFocus
                                />
                            </div>
                            <div>
                                <label htmlFor={id_input_password}>{txt_label_password}</label>
                                <input
                                    className={className_inputs}
                                    id={id_input_password}
                                    name={name_input_password}
                                    type='password'
                                    required
                                /> 
                            </div>
                            <input
                                id={id_bttn_submit}
                                type='submit'
                                value={value_bttn_submit}
                            />
                        </form>
                    </article>
                    <article className={className_article_footer}>
                        <Link to='/send-mail'>{a_footer}</Link>
                        <span className={className_span}></span>
                        <div>
                            <p>{p_footer}</p>
                            <Link to='/sign-up'>{txt_signup}</Link>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
  
}