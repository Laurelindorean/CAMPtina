import './FormCrearApat.css'
import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CloseFinestra, ResetRoda } from '../../../Icones.jsx'
import { DadesCamptinaContext } from '../../../services/DadesCamptina.jsx'

export const FormCrearApat = () => {
    const { crearApat, categories } = useContext(DadesCamptinaContext)

    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const peticioCrearApat = handleSubmit((data) => {
        const nouApat = {
            nom: data.nomDeApat,
            categoriaId: parseInt(data.categoriaDeApat),
            descripcio: data.descripcioDeApat
        };
        crearApat(nouApat); 
        reset();
    })

    const fn_resetejarApat = (event) => {
        event.preventDefault();
        reset();
    }

    const [esTancat, setEsTancat] = useState(false)

    const tancarFinestra = () => {
        setEsTancat(!esTancat);
    }

    useEffect(() => {
        if (esTancat) {
            const section = document.getElementById('id_section_form_crear_apat');
            const article = document.getElementById('id_form_crear_apat');
            article.setAttribute('style', 'display: none;');
            section.setAttribute('style', 'height: 70px');
        } else {
            const section = document.getElementById('id_section_form_crear_apat');
            const article = document.getElementById('id_form_crear_apat');
            article.removeAttribute('style');
            section.removeAttribute('style');
        }
    }, [esTancat])

    const className_section = 'cn-section-form-crear-apat';
    const id_section = 'id_section_form_crear_apat'
    const className_article_nom = 'cn-article-nom-form-crear-apat';
    const className_h3_nom = 'cn-h3-nom-form-crear-apat';
    const nomSeccio = 'Creació d\'un àpat';

    const className_form = 'cn-form-crear-apat';
    const id_form = 'id_form_crear_apat';
    const className_div_contingut_form = 'cn-div-contingut-form-crear-apat';
    const className_div_txt_select_form = 'cn-div-txt-select-form-crear-apat';
    const className_div_lbl_txt_form = 'cn-div-lbl-text-form-crear-apat';
    const className_div_lbl_select_form = 'cn-div-lbl-select-form-crear-apat';
    const className_div_txtarea_form = 'cn-div-txtarea-form-crear-apat';
    const className_div_bttn_form = 'cn-div-bttn-form-crear-apat';

    const className_div_container_input = 'cn-div-container-input-form-crear-apat';
    const className_div_container_select = 'cn-div-container-select-form-crear-apat';
    const className_div_container_txtarea = 'cn-div-container-txtarea-form-crear-apat';

    const className_input_txt = 'cn-input-txt-form-crear-apat';
    const id_input_txt = 'id_input_txt_form_crear_apat';
    const name_input_txt = 'nomApat';
    const txtInputNomApat = 'Nom de l\'àpat:';

    const className_select = 'cn-select-form-crear-apat';
    const id_select = 'id_select_form_crear_apat';
    const name_select = 'categoriaApat';
    const txtSelectCategoriaApat = 'Categoria de l\'àpat:';

    const className_txtarea = 'cn-txtarea-form-crear-apat';
    const id_txtarea = 'id_txtarea_form_crear_apat';
    const name_txtarea = 'descripcioApat';
    const txtTxtareaDescripcioApat = 'Descripció de l\'àpat:';
    const txtareaRows = 3;
    const txtareaCols = 30;
    const preTxtarea = 'Descriu l\'àpat...';

    const id_reset = 'id_reset_form_crear_apat';
    const name_reset = 'resetejarCrearApat';

    const id_submit = 'id_submit_form_crear_apat';
    const name_submit = 'crearApat';
    const value_submit = 'Crear';

    const className_bttn_finestra = 'cn-bttn-finestra-form-crear-apat';
    const id_bttn_finestra = 'id_bttn_finestra_form_crear_apat';
    const name_bttn_finestra = 'finestraDeFormCrear';

    const className_span = 'cn-span-error';

    return (
        <>
            <section className={className_section} id={id_section}>
                <article className={className_article_nom}>
                    <h3 className={className_h3_nom}>{nomSeccio}</h3>
                    <button
                        className={className_bttn_finestra}
                        id={id_bttn_finestra}
                        name={name_bttn_finestra}
                        onClick={tancarFinestra}
                    >
                        <CloseFinestra />
                    </button>
                </article>
                <form className={className_form} id={id_form} onSubmit={peticioCrearApat}>
                    <div className={className_div_contingut_form}>
                        <div className={className_div_txt_select_form}>
                            <div className={className_div_container_input}>
                                <div className={className_div_lbl_txt_form}>
                                    <label htmlFor={id_input_txt}>{txtInputNomApat}</label>
                                    <input
                                        defaultValue={''}
                                        className={className_input_txt}
                                        id={id_input_txt}
                                        name={name_input_txt}
                                        type='text'
                                        { ... register('nomDeApat', {
                                            required: true,
                                            minLength: 3,
                                            maxLength: 50
                                        })}
                                    />
                                </div>
                                { errors.nomDeApat?.type === 'required' &&
                                <span className={className_span}>El nom és obligatori</span> }
                                { errors.nomDeApat?.type === 'minLength' &&
                                <span className={className_span}>Mínim 3 caràcters</span> }
                                { errors.nomDeApat?.type === 'maxLength' &&
                                <span className={className_span}>Màxim 50 caràcters</span> }
                            </div>
                            <div className={className_div_container_select}>
                                <div className={className_div_lbl_select_form}>
                                    <label htmlFor={id_select}>{txtSelectCategoriaApat}</label>
                                    <select defaultValue={''} className={className_select} id={id_select} name={name_select}
                                    { ... register('categoriaDeApat', {
                                        required: true
                                    })}>
                                        <option value='' disabled></option>
                                        {categories.map((categoria)=>(
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nom.charAt(0).toUpperCase() + categoria.nom.slice(1).toLowerCase()}
                            </option>
                        ))}
                                    </select>
                                </div>
                                { errors.categoriaDeApat?.type === 'required' &&
                                <span className={className_span}>Has de seleccionar una categoria</span> }
                            </div>
                        </div>
                        <div className={className_div_container_txtarea}>
                            <div className={className_div_txtarea_form}>
                                <label htmlFor={id_txtarea}>{txtTxtareaDescripcioApat}</label>
                                <textarea
                                    defaultValue={''}
                                    className={className_txtarea}
                                    id={id_txtarea}
                                    name={name_txtarea}
                                    placeholder={preTxtarea}
                                    rows={txtareaRows}
                                    cols={txtareaCols}
                                    { ... register('descripcioDeApat', {
                                        required: true,
                                        minLength: 5,
                                        maxLength: 100
                                    })}
                                />
                                { errors.descripcioDeApat?.type === 'required' &&
                                <span className={className_span}>La descripció és obligatòria</span> }
                                { errors.descripcioDeApat?.type === 'minLength' &&
                                <span className={className_span}>Mínim 5 caràcters</span> }
                                { errors.descripcioDeApat?.type === 'maxLength' &&
                                <span className={className_span}>Màxim 100 caràcters</span> }
                            </div>
                        </div>
                    </div>
                    <div className={className_div_bttn_form}>
                        <button
                            id={id_reset}
                            name={name_reset}
                            onClick={event => fn_resetejarApat(event)}
                        >
                            <ResetRoda />
                        </button>
                        <input
                            id={id_submit}
                            name={name_submit}
                            value={value_submit}
                            type='submit'
                        />
                    </div>
                </form>
            </section>
        </>
    )
}