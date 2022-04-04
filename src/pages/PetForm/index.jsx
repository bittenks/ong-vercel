/* eslint-disable default-case */
import 'animate.css'
import React,{ useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { Link } from 'react-router-dom';
import { auth } from '../../util/firebase';
import { db } from '../../util/firebase';
import { st } from '../../util/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import { resolve } from 'dns';
export default function PetForm() {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [specie, setSpecie] = useState('');
    const [sex, setSex] = useState('');
    const [port, setPort] = useState('');
    const [age, setAge] = useState('');

    //enviar para Firebase
    const createPet = () => {
        const petRef = db.ref('Pet');
        const pet = {
            title,
            name,
            avatar,
            bio,
            specie,
            sex,
            port,
            age,
        };

        petRef.push(pet);
        console.log(pet)
    };
    // firebase bucket name
    // REPLACE WITH THE ONE YOU CREATE
    // ALSO CHECK STORAGE RULES IN FIREBASE CONSOLE
    var fbBucketName = 'Pets';

    // get elements
    var uploader = document.getElementById('uploader');

    // listen for file selection
    function UploadImagem(e) {

        // what happened
        console.log('file upload event', e);

        // get file
        var file = e.target.files[0];

        // create a storage ref
        var storageRef = st.ref(`${fbBucketName}/${file.name}`);

        // upload file
        var uploadTask = storageRef.put(file);

        // The part below is largely copy-pasted from the 'Full Example' section from
        // https://firebase.google.com/docs/storage/web/upload-files

        // update progress bar
        uploadTask.on('state_changed', // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById('uploader').value = progress;
                console.log('Upload is ' + progress + '% done');
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setAvatar(downloadURL)
                });
            }
            // Upload completed successfully, now we can get the download URL


        )

    };
    //mensagens notify API
    const sucess = () => toast("Cadastro feito com Sucesso!🐶💗😺");
    const error = () => toast("Todos os campos devem ser preenchidos!😿");



    //validacao do form
    function validar() {
        var name = document.getElementById("name");
        if (name.value === "") {
            error();
            name.focus();
            return;
        }
        var title = document.getElementById("title");
        if (title.value === "") {
            error();
            title.focus();
            return;
        }
        // var avatar = document.getElementById("avatar");
        // if (avatar.value === ""){
        //   error();
        //   avatar.focus();
        //   return;
        // }
        var bio = document.getElementById("bio");
        if (bio.value === "") {
            error();
            bio.focus();
            return;
        }

        var specie = document.getElementById("specie");
        if (specie.value === "") {
            error();
            specie.focus();
            return;
        }

        var sex = document.getElementById("sex");
        if (sex.value === "") {
            error();
            sex.focus();
            return;
        }
        var port = document.getElementById("port");
        if (port.value === "") {
            error();
            port.focus();
            return;
        }
        var age = document.getElementById("age");
        if (age.value === "") {
            error();
            age.focus();
            return;
        } else {
            pet_notify()
            return;
        }
    }

    function pet_notify() {
        sucess();
        createPet()
    }
    return (
        <div id="page-pet-form" className="container">
            <PageHeader title="Vamos cadastrar mais um amigo!💗🐶😺"
                description="Esta página está disponível somente para agentes da ONG " />
            <main>
                <form id="formulario">
                    {/* <input type="file" value="upload" accept=".jpg" id="fileButton"></input> */}

                    <fieldset>

                        <Input name="name" label="Nome" value={name} required onChange={(e)=> { setName(e.target.value)
                        }}
                        />
                        <label htmlFor="">Avatar</label>
                        <div>
                        <progress value="0" max="100" id="uploader">0%</progress>
                        <input id='imageupload' className='uploadimage' name="avatar" label="Avatar" accept="image/*" required onChange={(e)=> {
                        UploadImagem(e)
                        }}
                        id='fileButton'
                        type='file'
                        />
                        </div>
                       
                        <Textarea name="bio" label="Biografia" value={bio} required onChange={(e)=> { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre</legend>

                        <Select
                            name="specie"
                            label="Espécie"
                            value={specie}
                            required
                            onChange={(e) => { setSpecie(e.target.value) }}
                            options={[
                                { value: 'Cachorro', label: 'Cachorro' },
                                { value: 'Gato', label: 'Gato' },
                               
                            ]}
                        />
                        <Select
                            name="sex"
                            label="Sexo"
                            value={sex}
                            required
                            onChange={(e) => { setSex(e.target.value) }}
                            options={[
                                { value: 'Macho', label: 'Macho' },
                                
                                { value: 'Fêmea', label: 'Fêmea' }
                            ]}
                        />
                        <Select
                                        name="age"
                                        label="Idade"
                                        value={age}
                                        onChange={e => setAge( e.target.value)}
                                        options={[
                                            { value: '0-9 meses', label: '0-9 meses' },
                                            { value: '1-2 anos', label: '1-2 anos' },
                                            { value: '3 anos ou mais', label: '3 anos ou mais' },
                                          
                                        ]}
                                        required/>


                        <Select
                            name="port"
                            label="Porte"
                            value={port}
                            required
                            onChange={(e) => { setPort(e.target.value) }}
                            options={[
                                { value: 'Pequeno', label: 'Pequeno' },
                                { value: 'Médio', label: 'Médio' },
                                { value: 'Grande', label: 'Grande' },
                            ]}
                        />

                        <Select
                            name="title"
                            label="Castrado?"
                            value={title}
                            required
                            onChange={(e) => { setTitle(e.target.value) }}
                            options={[
                                { value: 'Sim', label: 'Sim' },
                                { value: 'Não ', label: 'Não' },
                               
                            ]}
                        />  
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                            Importante <br />
                            Preencha todos os dados
                        </p>
                        
                    <button type="submit" onClick={validar}>
                        Cadastrar
                    </button>
                    </footer>
                </form>
                <div className='container-button'>    
                         
                <div className="buttons-container">
                     <div className='container-button'>    
                     <button  className='signoutbutton' //deslogar
                         onClick={() => auth.signOut()}>Sair</button>
                         </div>
                         <Link to="/adm" className="admin">
                       Ir para Adm
                   </Link>
                     </div> 
                     </div> 

            </main>
        </div>
        
    );
    
 }

