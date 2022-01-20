import { useState, useEffect } from 'react';
import firebase from './firebaseConnection';
import './style.css';

function App() {
  const [idPost, setIdPost] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function loadPosts(){
      await firebase.firestore().collection('posts')
      .onSnapshot((doc)=>{
        let meusPosts = [];

        doc.forEach((item)=>{
          meusPosts.push({
            id: item.id,
            titulo: item.data().titulo,
            autor: item.data().autor,
          })
        });

        setPosts(meusPosts);

      })
    }

    loadPosts();

  })

  async function handleAdd(){
/*     await firebase.firestore().collection('posts')
    .doc('12345')
    .set({
      titulo: titulo,
      autor: autor
    }) */

    await firebase.firestore().collection('posts')
    .add({
      titulo: titulo,
      autor: autor,
    })
    .then(()=>{
      console.log('DADOS CADASTRADOS COM SUCESSO');
      setTitulo('');
      setAutor('');
    })
    .catch((error) => {
      console.log('GEROU ALGUM ERRO: ' + error);
    })
  }

  async function buscaPost(){
/*     await firebase.firestore().collection('posts')
    .doc('123')
    .get()
    .then((snapshot)=>{
      setTitulo(snapshot.data().titulo);
      setAutor(snapshot.data().autor);

    })
    .catch(()=>{
      console.log('Deu Algum Erro');
    }) */

    await firebase.firestore().collection('posts')
    .get()
    .then((snapshot)=>{
      let lista = [];

      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPosts(lista);

    })
    .catch(()=>{
      console.log('DEU ALGUM ERRO!');
    })
  }

  async function editarPost(){
    await firebase.firestore().collection('posts')
    .doc(idPost)
    .update({
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      console.log('Dados atualizados com sucesso.');
      setPosts('');
      setTitulo('');
      setAutor('');
    })
    .catch(()=>{
      console.log('Erro ao Atualizar');
    })
  }

  async function excluirPost(id){
    await firebase.firestore().collection('posts').doc(id)
    .delete()
    .then(() => {
      alert('Esse Post foi excluido');
    })
  }

  return (
    <div className="App">
      <h1>ReactJs + Firebase :</h1> <br/>

    <div className='container'>

      <label>ID: </label>
      <input type="text" value={idPost} onChange={ (e) => setIdPost(e.target.value)} />

      <label>Titulo</label>
      <textarea type="text" value={titulo} onChange={ (e) => setTitulo(e.target.value)} />

      <label>Autor: </label>
      <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value)} /> <br/>

      <button onClick={handleAdd}>Cadastrar</button> <br/>
      <button onClick={buscaPost}>Busca Post</button> <br/>
      <button onClick={editarPost}>Editar</button> <br/>

      <ul>
        {posts.map((post)=>{
          return(
            <li key={post.id}>
              <span>ID - {post.id}</span> <br/>
              <span>Titulo: {post.titulo} </span> <br/>
              <span>Autor: {post.autor} </span> <br/>
              <button onClick={ ()=> excluirPost(post.id) }>Excluir Post</button> <br/> <br/>
            </li>
          )
        })}
      </ul>
      </div>

    </div>
  );
}

export default App;
