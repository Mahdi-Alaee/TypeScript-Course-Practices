class Course {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

function submitHandler(e: Event){
    e.preventDefault();

    const titleElem = document.getElementById('title') as HTMLInputElement;
    const priceElem = document.getElementById('price') as HTMLInputElement;

    const title = titleElem.value;
    const price = +priceElem.value;

    const newCourse = new Course(title, price);

    console.log(newCourse);
}

//! events
document.querySelector('form')!.addEventListener('submit', submitHandler);
