var images=["WIN_20210508_00_01_28_Pro (2).jpg", "WIN_20210507_23_53_55_Pro(2).jpg", "WIN_20210507_23_51_28_Pro(2).jpg", "WIN_20210507_23_50_08_Pro(2).jpg", "WIN_20200822_23_27_20_Pro.jpg"];

var names=["family book", "AKM rahman", "Sultana rob", "Kaysan Nafi", "Aleeza Zoha", "Ahnaf Yafi"];

var i = 0;
function update()


{

i++;
var numbers_of_family_member_in_array=5;
if(i>numbers_of_family_member_in_array)

{

   i=0;

}
var updatedImage=images[i];
var updatedName=names[i]
document.getElementById("family_number_image").src=updatedImage;
document.getElementById("family_member_name").src=updatedName;
}