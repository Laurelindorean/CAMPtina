import './LlistaApats.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { apats as apatsInicials } from '../../../dades/dades-plantilla.json'
import { useAxiosPeticions } from './AxiosPeticions.js'

export const LlistaApats = () => {

    const { carregarApats, eliminarApat, apats } = useAxiosPeticions()

    useEffect(() => {
        carregarApats()
    }, [])

    const {register, handleSubmit, formState: {errors}} = useForm()
    
    const peticioActualitzarApat = handleSubmit((data) => {
        console.log(data)
    })

    //const [apats] = useState(apatsInicials) //Working

    const [esTancat, setEsTancat] = useState(false)

    const tancarFinestra = () => {
        setEsTancat(!esTancat);
    }

    useEffect(() => {
        if (esTancat) {
            const section = document.getElementById('id_section_llista_apats');
            const article = document.getElementById('id_article_llista_apats');
            article.setAttribute('style', 'display: none;');
            section.setAttribute('style', 'height: 70px');
        } else {
            const section = document.getElementById('id_section_llista_apats');
            const article = document.getElementById('id_article_llista_apats');
            article.removeAttribute('style');
            section.removeAttribute('style');
        }
    }, [esTancat])

    const [filterObert, setFilterObert] = useState(false)

    const obrirFilter = () => {
        setFilterObert(!filterObert);
    }

    useEffect(() => {
        const select = document.getElementById('id_select_filter_categoria_llista_apats');
        const bttn = document.getElementById('id_bttn_filter_categoria_llista_apats');
        if (filterObert) {
            select.setAttribute('style', 'display: flex; width: 200px; height: 100%; border: none;' +
                'border-radius: 8px; background: #fff; color: #258; text-align: center; cursor: pointer;');
            bttn.setAttribute('style', 'background: #075;');
        } else {
            select.removeAttribute('style');
            bttn.removeAttribute('style');
        }
    }, [filterObert])

    /*const [filters, setFilters] = useState({
        categoria: 'all'
    })

    //FILTRAR UN ARRAY !!!IMPORTANTE ESTUDIAR
    const filterApats = (apats) => {
        return apats.filter(apat => {
            return (
                filters.categoria === 'all' ||
                apat.categoria === filters.categoria
            )
        })
    }

    const filteredApats = filterApats(apats)*/

    const className_section = 'cn-section-llista-apats';
    const id_section = 'id_section_llista_apats'
    const className_article_nom = 'cn-article-nom-llista-apats';
    const className_h3_nom = 'cn-h3-nom-llista-apats';
    const nomSeccio = 'Llista d\'àpats';

    const className_bttn_finestra = 'cn-bttn-finestra-llista-apats';
    const id_bttn_finestra = 'id_bttn_finestra_llista_apats';
    const name_bttn_finestra = 'finestraDeLlistaApats';
    //const txt_bttn_finestra = '✕';

    const className_article_llista = 'cn-article-llista-apats';
    const id_article_llista = 'id_article_llista_apats';
    const className_ul_llista = 'cn-ul-llista-apats';
    const className_li_update_llista = 'cn-li-update-llista-apats';
    const className_li_id_llista = 'cn-li-id-llista-apats';
    const className_li_nom_llista = 'cn-li-nom-llista-apats';
    const className_li_categoria_llista = 'cn-li-categoria-llista-apats';
    const className_li_descripcio_llista = 'cn-li-descripcio-llista-apats';
    const className_li_delete_llista = 'cn-li-delete-llista-apats';

    const className_div_llista = 'cn-div-llista-apats';

    const className_li_update_items = 'cn-li-update-items-llista-apats';
    const className_li_1 = 'cn-li-1-llista-apats';
    const className_li_2 = 'cn-li-2-llista-apats';
    const className_li_3 = 'cn-li-3-llista-apats';
    const className_li_4 = 'cn-li-4-llista-apats';
    const className_li_delete_items = 'cn-li-delete-items-llista-apats';

    const llistaID = 'ID de l\'àpat';
    const llistaNom = 'Nom de l\'àpat';
    const llistaCategoria = 'Categoria';
    const llistaDescripcio = 'Breu descripció de l\'àpat';

    const className_div_filter_intern = 'filter-intern-llista-apats';
    const className_select_filter_categoria = 'cn-select-filter-categoria-llista-apats';
    const id_select_filter_categoria = 'id_select_filter_categoria_llista_apats';
    const name_select_filter_categoria = 'selectFiltre';

    const className_filter_categoria = 'cn-bttn-filter-categoria-llista-apats';
    const id_filter_categoria = 'id_bttn_filter_categoria_llista_apats';
    const name_filter_categoria = 'filterCategoria';

    const id_delete = '_delete_llista_apats';
    const id_form = '_form_apats';








    const [formUpdate, setFormUpdate] = useState({
        id: '0000',
        valor: false,
        llista: []
    })

    const updateApatAra = event => {
        const actualID = event.currentTarget.id;
        !formUpdate.llista.includes(actualID)
            ? formUpdate.llista.push(actualID)
            : formUpdate.llista.splice(formUpdate.llista.indexOf(actualID), 1)
        setFormUpdate({
            id: actualID,
            valor: true,
            llista: formUpdate.llista
        })
    }

    useEffect(() => {
        const id = formUpdate.id;
        const valor = formUpdate.valor;
        const llista = formUpdate.llista;
        const separar = id.split("");
        const suma = separar[0]*1000 + separar[1]*100 + separar[2]*10 + separar[3]*1;
        if (valor) {
            const cn_form = document.getElementsByClassName('cn-form-update-llista-apats')[suma - 1];
            const bttn = document.getElementById(id);
            if (llista.includes(id)) {
                cn_form.setAttribute('style', 'display: flex;');
                bttn.setAttribute('style', 'background: #222;');
            } else {
                cn_form.removeAttribute('style');
                bttn.removeAttribute('style');
            }
        }
    }, [formUpdate])

    const deleteApatAra = event => {
        eliminarApat(event.currentTarget.id);
        const element = document.getElementById(event.currentTarget.id).parentNode.parentNode;
        element.parentNode.removeChild(element);
    }


    function FinestraX() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 content-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        )
    }

    function UpdateApat() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 content-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
        )
    }

    function FilterIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 content-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
        )
    }

    function CancelarIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 content-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        )
    }

    function CrearFormUpdate({ id_1, id_2, id_3, id_4, id_5 }) {

        const className_form_update = 'cn-form-update-llista-apats';
        const id_form_update = `id_${id_1}_form_update_llista_apats`;

        const cn_form_div_inputs_update = 'cn-form-div-inputs-update-llista-apats';
        const cn_form_div_inputs_nom_update = 'cn-form-div-inputs-nom-update-llista-apats';
        const cn_form_div_inputs_categoria_update = 'cn-form-div-inputs-categoria-update-llista-apats';
        const cn_form_div_inputs_descripcio_update = 'cn-form-div-inputs-descripcio-update-llista-apats';

        const cn_form_div_bttns_update = 'cn-form-div-bttns-update-llista-apats';

        const className_input_nom_update = 'className-input-nom-update-llista-apats';
        const id_input_nom_update = `id_${id_2}_input_nom_update_llista_apats`;
        const name_input_nom_update = 'actualitzarNom';

        const className_select_categoria_update = 'className-select-categoria-update-llista-apats';
        const id_select_categoria_update = `id_${id_3}_select_categoria_update_llista_apats`;
        const name_select_categoria_update = 'actualitzarCategoria';

        const valuePrimer = 1;
        const valueSegon = 2;
        const valuePostres = 3;

        const txtPrimer = 'Primer';
        const txtSegon = 'Segon';
        const txtPostres = 'Postres';

        const className_txtarea_update = 'className-txtarea-update-llista-apats';
        const id_txtarea_update = `id_${id_4}_txtarea_update_llista_apats`;
        const name_txtarea_update = 'actualitzarDescripcio';
        const preTxtarea_update = 'Descriu l\'àpat...';
        const txtareaRows_update = 3;
        const txtareaCols_update = 30; 

        const className_span_update = 'cn-span-update-llista-apats';

        const className_submit_update = 'cn-submit-update-llista-apats';
        const name_submit_update = 'nameUpdate';
        const value_submit_update = 'Actualitzar';
        
        const className_bttn_cancelar_update = 'cn-bttn-cancelar-update-llista-apats';
        const id_bttn_cancelar_update = `id_${id_5}_bttn_cancelar_update_llista_apats`;
        const name_bttn_cancelar_update = 'cancelarUpdate';

        return (
            <form className={className_form_update} id={id_form_update} onSubmit={peticioActualitzarApat}>
                <div className={cn_form_div_inputs_update}>
                    <div className={cn_form_div_inputs_nom_update}>
                        <input
                            defaultValue={''}
                            className={className_input_nom_update}
                            id={id_input_nom_update}
                            name={name_input_nom_update}
                            placeholder='Nom'
                            type='text'
                            { ... register('nomDeApatUpdate', {
                                required: true
                            })}
                        />
                        { errors.nomDeApatUpdate?.type === 'required' &&
                            <span className={className_span_update}>El nom és requerit</span> }
                    </div>
                    <div className={cn_form_div_inputs_categoria_update}>
                        <select
                            defaultValue={''}
                            className={className_select_categoria_update}
                            id={id_select_categoria_update}
                            name={name_select_categoria_update}
                            { ... register('categoriaDeApatUpdate', {
                                required: true
                            })}
                        >
                            <option value='' disabled>Categoria</option>
                            <option value={valuePrimer}>{txtPrimer}</option>
                            <option value={valueSegon}>{txtSegon}</option>
                            <option value={valuePostres}>{txtPostres}</option>
                        </select>
                        { errors.categoriaDeApatUpdate?.type === 'required' &&
                            <span className={'o'}>La categoria és requerida</span> }
                    </div>
                    <div className={cn_form_div_inputs_descripcio_update}>
                        <textarea
                            defaultValue={''}
                            className={className_txtarea_update}
                            id={id_txtarea_update}
                            name={name_txtarea_update}
                            placeholder={preTxtarea_update}
                            rows={txtareaRows_update}
                            cols={txtareaCols_update}
                            { ... register('descripcioDeApatUpdate', {
                                required: true,
                                maxLength: 120
                            })}
                        />
                        { errors.descripcioDeApatUpdate?.type === 'required' &&
                            <span className={className_span_update}>La descripció és requerida</span> }
                        { errors.descripcioDeApatUpdate?.type === 'maxLength' && 
                            <span className={className_span_update}>Max 120</span> }
                    </div>
                </div>
                <div className={cn_form_div_bttns_update}>
                    <button
                        className={className_bttn_cancelar_update}
                        id={id_bttn_cancelar_update}
                        name={name_bttn_cancelar_update}
                    >
                        <CancelarIcon />
                    </button>
                    <input
                        className={className_submit_update}
                        name={name_submit_update}
                        value={value_submit_update}
                        type='submit'
                    />
                </div>
            </form>
        )
    }

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
                        <FinestraX />
                    </button>
                    <div className={className_div_filter_intern}>
                        <button
                            className={className_filter_categoria}
                            id={id_filter_categoria}
                            name={name_filter_categoria}
                            onClick={obrirFilter}
                        >
                            <FilterIcon />
                        </button>
                        <select className={className_select_filter_categoria} id={id_select_filter_categoria} name={name_select_filter_categoria}>
                            <option value={'all'}>Totes</option>
                            <option value={'1'}>Primer</option>
                            <option value={'2'}>Segon</option>
                            <option value={'3'}>Postres</option>
                        </select>
                    </div>
                </article>
                <article className={className_article_llista} id={id_article_llista}>
                    <ul className={className_ul_llista}>
                        <li className={className_li_update_llista}></li>
                        <li className={className_li_id_llista}>{llistaID}</li>
                        <li className={className_li_nom_llista}>{llistaNom}</li>
                        <li className={className_li_categoria_llista}>{llistaCategoria}</li>
                        <li className={className_li_descripcio_llista}>{llistaDescripcio}</li>
                        <li className={className_li_delete_llista}></li>
                    </ul>
                    {apats.map(apat => (
                        <div key={apat.id} className={className_div_llista}>
                            <ul className={className_ul_llista}>
                                <li id={apat.id} className={className_li_update_items} onClick={updateApatAra}><UpdateApat /></li>
                                <li className={className_li_1}>{apat.id}</li>
                                <li className={className_li_2}>{apat.nom}</li>
                                <li className={className_li_3}>{apat.categoria}</li>
                                <li className={className_li_4}>{apat.descripcio}</li>
                                <li id={`${apat.id}${id_delete}`} className={className_li_delete_items} onClick={deleteApatAra}><CancelarIcon /></li>
                            </ul>
                            <CrearFormUpdate
                                id_1={apat.id}
                                id_2={apat.id}
                                id_3={apat.id}
                                id_4={apat.id}
                                id_5={apat.id}
                            />
                        </div>
                    ))}
                </article>
            </section>
        </>
    )
}