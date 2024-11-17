// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим как минимум поле { id: number }. 
// Класс должен служить для хранения объектов типа T в приватном массиве.

// Подсказки:
//   - Используйте ограничение типа: T extends { id: number }, чтобы убедиться, что T всегда имеет поле id.
//   - Для метода add используйте утилитарный тип Omit<T, 'id'>, чтобы разрешить добавление объектов без поля id.
//   - Для метода update используйте Partial<T> и добавьте ограничение, чтобы всегда было поле id.

// Реализуйте в классе следующие методы:

//  - Конструктор должен принимать необязательный массив объектов типа T. Если массив передан, его элементы добавляются в хранилище.
 
//  - Метод add принимает либо объект типа T, либо объект типа Omit<T, 'id'>.
//    Если объект без id, сгенерируйте уникальный id (например, с использованием счетчика или функции Date.now()).
//    Подсказка: Используйте утилитарный тип Omit<T, 'id'> для указания типов объектов без поля id.
 
//  - Метод update принимает объект с обязательным полем id и любым набором остальных ключей из T (используйте Partial<T>). 
//    Найдите объект с указанным id и обновите его соответствующими полями.

//  - Метод remove принимает id и удаляет объект из массива.

//  - Метод getById принимает id и возвращает объект с этим id, если найден, или undefined, если нет.

//  - Метод getAll возвращает все объекты в хранилище.

class ObjectStorage<T extends { id: number }> {
  private storageArray: T[] = [];
  constructor(arrayOfObjects?: T[]) {
    if (arrayOfObjects) {
      this.storageArray.push(...arrayOfObjects);
    }
  }

  add(object: T | Omit<T, 'id'>): void {
    if (this.isIdInObject(object)) {
      this.storageArray.push(object);
    } else {
      this.storageArray.push({id: this.generateNewId(), ...object} as T);
    }
    console.log(`Added ${this.storageArray.at(-1)} to storage array`);
  }

  private isIdInObject(object: T | Omit<T, 'id'>): object is T {
    return 'id' in object;
  }

  private generateNewId(): number {
    if (this.storageArray.length !== 0) {
      return this.storageArray.reduce((id, object) => {
        if (object.id > id) {
          id = object.id;
        }
        return id;
      }, 0) + 1;
    } else {
      return 1;
    }
  }

  update(object: Partial<T> & Pick<T, 'id'>): void {
    const index = this.getIndexById(object.id);
    if (index === -1) throw new Error (`Can't find object with id ${object.id}`);
    this.storageArray[index] = {...this.storageArray[index], ...object};
    console.log(`Updated ${this.storageArray[index]}`);
  }

  private getIndexById(id: number): number {
    return this.storageArray.findIndex(object => object.id === id);
  }

  remove(id: number): void {
    const index = this.getIndexById(id);
    if (index === -1) throw new Error (`Can't find object with id ${id}`);
    this.storageArray.splice(index, 1);
    console.log(`Removed object with index ${id}`);
  }

  getById(id: number): T | undefined {
    return this.storageArray.find(object => object.id === id);
  }

  getAll(): T[] {
    return this.storageArray;
  }
}

type User = { id: number; name: string; age: number };

const storage = new ObjectStorage<User>();

// Добавление объектов
storage.add({ id: 1, name: 'Anatoly', age: 33 }); // Объект с id
storage.add({ name: 'Elena', age: 25 }); // Объект без id, id сгенерируется автоматически

// Обновление объектов
storage.update({ id: 1, name: 'Egor' }); // Обновление имени пользователя с id 1
storage.update({ id: 2, name: 'Tatiana', age: 33 }); // Обновление имени и возраста пользователя с id 2

// Получение объектов
console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]

// Удаление объектов
storage.remove(2);

console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }]