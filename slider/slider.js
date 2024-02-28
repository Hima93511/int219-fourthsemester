const a=document.querySelectorAll('.slider');
var counter=0;
// console.log(a);
a.forEach(
    (slider ,index) =>
    {
        slider.style.top= `${index*100}%`
    }
)
const Previous=()=>
{
    counter--
    sliderrun()
}
const Next=()=>
{
    counter++
    sliderrun()
}
const sliderrun = () => {
    a.forEach(
        (slider) => {
            slider.style.transform = `translateY(-${counter * 100}%)`
        }
    )
}


 
