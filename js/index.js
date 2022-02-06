import { dates } from "./data.js"; 
// console.log(dates)
const timeline = document.querySelector(".timeline")

dates.map((item) => {
  console.log("item", item)

// Creating empty div
const _timeline_item = document.createElement("div");
  //giving div a class of timeline item
  _timeline_item.setAttribute("class", "timeline-item");

  //Creating the title h2 giving it a class and setting the text
  const _timeline_item_title = document.createElement("h2");
  _timeline_item_title.setAttribute("class", "timeline-item-title");
  _timeline_item_title.textContent = item.title;
  _timeline_item.appendChild(_timeline_item_title);

  const _timeline_item_date = document.createElement("span")
  _timeline_item_date.setAttribute("class", "timeline-item-date");
  _timeline_item_date.textContent = item.date;
  _timeline_item.appendChild(_timeline_item_date);

  const _timeline_item_summary = document.createElement("p")
  _timeline_item_summary.setAttribute("class", "timeline-item-summary");
  _timeline_item_summary.textContent = item.summary;
  _timeline_item.appendChild(_timeline_item_summary);

  const _timeline_item_more_info = document.createElement ("button");
  _timeline_item_more_info.setAttribute('class', 'timeline-item-more-info');
  _timeline_item_more_info.textContent = "click me"
  _timeline_item_more_info.addEventListener("click", () => setModalData(item));
  _timeline_item.appendChild(_timeline_item_more_info);

  timeline.appendChild(_timeline_item);

});

//Get the modal function
function setModalData(item) {  
  const _modal_container = document.createElement('div');
  _modal_container.setAttribute('id','modal-container');
  _modal_container.classList.add('modal');
  _modal_container.classList.add('modal-visible');

  console.log(item.title);

  const _modal_title = document.createElement("h2");
  _modal_title.setAttribute("id", "modal-title");

  _modal_title.textContent = item.title;
  _modal_container.appendChild(_modal_title);

  const _modal_date = document.createElement("span")
  _modal_date.setAttribute("id", "modal-date");
  _modal_date.textContent = item.date;
  _modal_container.appendChild(_modal_date);

  const _modal_image = document.createElement ("img");
  _modal_image.setAttribute('id', 'modal-image');
  _modal_image.setAttribute('src', item.image);
  _modal_container.appendChild(_modal_image);

  const _more_info = document.createElement("p");
  _more_info.setAttribute("id", "modal-full-description");
  _more_info.classList.add("more-info")
  _more_info.textContent = item.fullDescription;
  _modal_container.appendChild(_more_info);

  const _modal_close = document.createElement('button');
  _modal_close.setAttribute("id", "modal-close-button");
  _modal_close.textContent = "close the modal"
  _modal_close.addEventListener('click', ()=> closeModal(_modal_container));
  _modal_container.appendChild(_modal_close);

  timeline.appendChild(_modal_container);
}

// /(css to open and close modal)

function closeModal(_modal_container){
  _modal_container.classList.remove("modal-visible");
  console.log('closeModal fuction');
};


// ('#closemodal').click(function() {
//   ('#modalwindow').modal('hide');
// });

