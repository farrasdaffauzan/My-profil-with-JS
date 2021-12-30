//alert("Welcome To My Website")

const status = document.createElement("h5")
status.innerText = "Dari Unit Universitas Mercu Buana"
const targeth5 = document.getElementById("Status")
targeth5.appendChild(status)

const status2 = document.createElement("h5")
status2.innerText = "Angkatan Tahun 2020/2021"
targeth5.appendChild(status2)

const almt = document.createElement("h6")
almt.innerText = "Taman Cibodas Jl Melati VII Blok F4 No 11"
const target2 = document.getElementById("list1")
target2.appendChild(almt)

const target = document.getElementById("list4")
target.childNodes[7]
target.removeChild(target.childNodes[7])

const newelm = document.createElement("h6")
newelm.innerText = "Bermain Basket"
target.replaceChild(newelm, target.childNodes[5])

const bg = document.getElementById("document")
bg.style.backgroundColor = "#ececec"

const button = document.getElementById("submit")
button.addEventListener("click", () => console.log("CLICK"))

const $ = (className) => {
  
    this.elms = document.getElementsByClassName(className);
  
    this.scale = (elm) => {
      if (elm.className.includes('scale')) {
        elm.classList.remove('scale');
      } else {
        elm.classList.add('scale')
      }
    }
  
    this.click = (animation) => {
      if (this.elms && this.elms.length && animation === 'toggle-scale') {
        for (let i = 0; i < this.elms.length; i++) {
          const elm = this.elms[i];
          elm.addEventListener('click', this.scale.bind(this, elm));
        }
      }
      // we can add another animation type handle here..
    }
  
    return this
}