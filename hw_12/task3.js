'use strict';
// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
// Вывести на экран: имя, e-mail, телефон и название компании пользователя.
// Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
// Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
// Для реализации трех запросов воспользоваться Promise.all().
// (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
// Пример: 
// 1.  name: Leanne Graham
//     email: Sincere@april.biz
//     phone: 1-770-736-8031 x56442
//     company: Romaguera-Crona    
//     albums:
//       Album name 1 (10 photos)
//       Album name 2 (100 photos)
// __________________________________

// 2.  name: Ervin Howell   
//     email: Shanna@melissa.tv 
//     phone: 010-692-6593 x09125
//     company: Deckow-Crist
//     albums:
//       Album name 1 (10 photos)
//       Album name 2 (100 photos)

const getUsersLink = 'https://jsonplaceholder.typicode.com/users';
const getAlbumsLink = 'https://jsonplaceholder.typicode.com/albums';
const getPhotosLink = 'https://jsonplaceholder.typicode.com/photos';

async function getDataFromUrl(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status is ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function logUsersData(users, albums, photos) {
  try {
    const [usersData, albumsData, photosData] = await Promise.all([getDataFromUrl(users), getDataFromUrl(albums), getDataFromUrl(photos)]);
    usersData.forEach((user, index, array) => {
      const spaceAtBegin = index < 9 ? '  ' : ' ';
      const userAlbums = getUserAlbums(user.id, albumsData, photosData);

      if (index !== 0) {
        console.log(``);
      }

      console.log(`${index + 1}.${spaceAtBegin}name: ${user.name}`);
      console.log(`    email: ${user.email}`);
      console.log(`    phone: ${user.phone}`);
      console.log(`    company: ${user.company.name}`);
      console.log(`    albums:`);
      userAlbums.forEach(album => console.log(`      ${album.title} (${album.numberOfPhotos} photos)`));

      if (index !== array.length - 1) {
        console.log(`__________________________________`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function getUserAlbums(userId, albums, photos) {
  const userAlbums = albums.filter(album => album.userId === userId);
  userAlbums.forEach(album => album.numberOfPhotos = photos.filter(photo => photo.albumId === album.id).length);
  return userAlbums;
}

logUsersData(getUsersLink, getAlbumsLink, getPhotosLink);