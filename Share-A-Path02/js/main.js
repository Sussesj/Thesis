$(function() {
    		$( "#draggable" ).draggable();
    		$( "#draggable2" ).draggable();
    		$( "#draggable2" ).draggable();
 });


function showMedia()
			{  // Find the element
				x=document.getElementById("media").style.display = 'block';    // Change the content	
				x=document.getElementById("link").style.display = 'none';    // Change the content	
				x=document.getElementById("collaborator").style.display = 'none';    // Change the content
				x=document.getElementById("timestamp").style.display = 'none';    // Change the conten	
			}   
function showLink()
{  // Find the element
	x=document.getElementById("media").style.display = 'none';    // Change the content	
	x=document.getElementById("link").style.display = 'block';    // Change the content	
	x=document.getElementById("collaborator").style.display = 'none';    // Change the content
	x=document.getElementById("timestamp").style.display = 'none';    // Change the conten				
	
}   

function showCollaborator()
{  // Find the element
	x=document.getElementById("media").style.display = 'none';    // Change the content	
	x=document.getElementById("link").style.display = 'none';    // Change the content	
	x=document.getElementById("collaborator").style.display = 'block';    // Change the content	
	x=document.getElementById("timestamp").style.display = 'none';    // Change the conten			
	
}   

function showTimestamp()
{  // Find the element
	x=document.getElementById("media").style.display = 'none';    // Change the content	
	x=document.getElementById("link").style.display = 'none';    // Change the content	
	x=document.getElementById("collaborator").style.display = 'none';    // Change the content	
	x=document.getElementById("timestamp").style.display = 'block';    // Change the conten			
	
}   