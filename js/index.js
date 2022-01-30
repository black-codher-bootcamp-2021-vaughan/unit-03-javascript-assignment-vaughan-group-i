import { dates } from "./data.js"; 
// console.log(dates)
const timeline = document.querySelector(".timeline")

// Creating empty div
const _timeline_item = document.createElement("div");

dates.map((item) => {


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

  const _timeline_open_modal_button = document.createElement ("button");
  _timeline_open_modal_button.setAttribute('id', 'modal-close-button');
  _timeline_open_modal_button.textContent = "click me"
  console.log("item", item)
  _timeline_open_modal_button.addEventListener("click", () => setModalData(item));
  _timeline_item.appendChild(_timeline_open_modal_button);

  timeline.appendChild(_timeline_item);

});

//Get the modal function
function setModalData(item) {
  console.log("set modal data function", item)
  
  const divElement = document.createElement('div');
  divElement.setAttribute('id','modal-container');
  divElement.classList.add('modal');
  divElement.classList.add('modal-visible');
 
  const { title, date, fullDescription, image, summary } = item;

  console.log(title)

  const timelineItemTitle = document.createElement("h2");
  timelineItemTitle.id = 'timeline-item-title';
  timelineItemTitle.classList.add("timeline-item-title");
  timelineItemTitle.textContent = title;
  divElement.appendChild(timelineItemTitle);

  const _more_info = document.createElement("p");
  _more_info.setAttribute("id", "modal_full_description");
  _more_info.textContent = item.fullDescription;

  divElement.appendChild(_more_info);

  const _modal_image = document.createElement ("img");
  _modal_image.setAttribute('id', 'modal-image');
  _modal_image.setAttribute('src', item.image);
  divElement.appendChild(_modal_image);

  const close = document.createElement('button');
  close.textContent = "close the modal"
  close.addEventListener('click', ()=> closeModal(divElement));
  divElement.appendChild(close);

  timeline.appendChild(divElement);
}


// /(css to open and close modal)
function closeModal(divElement){
  divElement.classList.remove("modal-visible");
    console.log('closeModal fuction');
};


// ('#closemodal').click(function() {
//   ('#modalwindow').modal('hide');
// });