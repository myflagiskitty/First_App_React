import React, { useState } from 'react';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import TextInput from './components/TextInput';
import './styles/App.css';


function App() {
 
  const [posts, setPosts] = useState([
    { id: 1, 
      title: 'Мейн-кун', 
      body: 'крупное, длинное мускулистое тело; мощные лапы, огромный хвост; фирменные кисточки на ушах и мордочка-коробочка', 
      picture: 'https://natworld.info/wp-content/uploads/2019/02/Mejn-kun.jpg', 
      cost: 467.88 },
      

    { id: 2, 
      title: 'Персидская', 
      body: 'голова с выпуклым лбом, большие круглые глаза; длинная и густая шерсть', 
      picture: 'https://natworld.info/wp-content/uploads/2019/02/Persidskaja-koshka-chernogo-okrasa.jpg', 
      cost: 673.789 },

    { id: 3, 
      title: 'Бомбейская', 
      body: 'шерсть вобрала в себя всю глубину черного цвета, при этом она безупречно гладкая и блестящая; глаза цвета «пенни»', 
      picture: 'https://lemiki.ru/wp-content/uploads/2017/05/image8.jpg', 
      cost: 571.6 },

    { id: 4, 
      title: 'Тонкинская', 
      body: 'крепкое и мускулистое тело среднего размера, со слегка округлой головой и большими широко посаженными ушами.', 
      picture: 'https://catherineasquithgallery.com/uploads/posts/2021-03/thumbs/1614768500_23-p-koshki-na-chernom-fone-26.jpg', 
      cost: 58.409 },

    { id: 5, 
      title: 'Сноу-шу', 
      body: 'реднего размера, в которой сочетается коренастость американской короткошерстной кошки со стройностью и грациозностью сиамской.', 
      picture: 'https://oir.mobi/uploads/posts/2022-09/thumbs/1662206590_29-oir-mobi-p-oboi-na-rabochii-stol-chernaya-koshka-oboi-32.jpg', 
      cost:  453.86 },

    { id: 6, 
      title: 'Сингапура', 
      body: 'голова имеет округлую форму с выраженными бакенбардами и короткой широкой мордой', 
      picture: 'https://oir.mobi/uploads/posts/2022-09/thumbs/1662206603_40-oir-mobi-p-oboi-na-rabochii-stol-chernaya-koshka-oboi-45.jpg', 
      cost:  812.6 },

    { id: 7, 
      title: 'Оцикет', 
      body: 'среднего или крупного размера и имеют пятнистую шерсть, широкую грудную клетку и мускулистые лапы.', 
      picture: 'https://million-wallpapers.ru/wallpapers/0/43/14497411022146016812/chernyj-kot-s-zheltymi-glazami-na-chernom-fone.jpg', 
      cost: 565.7 },
      
    { id: 8, 
      title: 'Саванна', 
      body: 'высокая худая кошка с длинными лапами. Взрослая особь может достигать веса в 15 кг при росте 60 см в холке', 
      picture: 'https://w-dog.ru/wallpapers/2/16/332444537628057/chrnaya-koshka-na-chrnom-fone.jpg', 
      cost: 231.32 },
        
    { id: 9, 
      title: 'Рэгдолл', 
      body: 'голова широкая, имеет плоскую верхнюю часть, с широко расположенными ушами. ', 
      picture: 'https://downloadwap.com/thumbs2/wallpapers/p2/2019/animals/12/ed364f6b13664662.jpg', 
      cost: 62.99 },

    { id: 10, 
      title: 'Пиксибоб', 
      body: 'крупные животные с коротким хвостом (встречаются особи со средними или даже длинными хвостами)', 
      picture: 'https://cs10.pikabu.ru/images/big_size_comm/2019-01_2/1546727991183631298.jpg', 
      cost: 589.33 }, 
      
    { id: 11, 
      title: 'Девон-рекс', 
      body: 'широкие скулы, большие глаза, низко посаженные уши. Короткая шерсть имеет волнистые остевые волосы, но в основном состоит из пухового подшерстка.', 
      picture: 'https://mobimg.b-cdn.net/v3/fetch/53/5324723dbd76404c2cb12c0109e913c4.jpeg', 
      cost: 3124.1 }, 
      
    { id: 12, 
      title: 'Бирманская', 
      body: 'довольно большая кошка плотного телосложения с короткими ногами. Имеет широкую голову и уши среднего размера.', 
      picture: 'https://f12.pmo.ee/paASzwx2Z9alcz6L5WKeRaDwUSw=/685x0/nginx/o/2018/02/26/7640801t1hf08a.jpg', 
      cost: 7469.54 },

  ])

  // const [posts2, setPosts2] = useState([
  //   { id: 1, title: 'никогда', body: 'Очень много горного отдыха' },
  //   { id: 2, title: 'такого', body: 'Сегодня снежно' },
  //   { id: 3, title: 'небыло', body: 'Хорошее настроение - это ниже отличного, но выше плохого' },
  // ])

  return (
    <div className="App">

      <Counter />
      <TextInput />
      <p>______________________________________________________</p>

      {/* <img src="https://funart.pro/uploads/posts/2022-08/thumbs/1660292085_7-funart-pro-p-chernaya-luna-art-krasivo-10.jpg" className=""/> */}
      
      <PostList posts={posts} title='Каталог'/>
      {/* <PostList posts={posts2} title='Нечто'/> */}

    </div>
  );
}

export default App;