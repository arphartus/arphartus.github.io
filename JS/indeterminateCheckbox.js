/*
Gives functionality for checkboxes to be part of a group that gets checked whenever a master checkbox is clicked

The master checkbox must be given the attribute master=groupname, and all the elements of that group be given group=groupname.

If a master element belongs to a group, all elements of its child group must be given both group names in its group attribute - space separated and in ascending order of parent

Functionality can be added by placing the toggleGroup(groupname) function to the master's click or change event, and the toggleElement(groupname) to the group element's event. Alternitavely the addEventListeners function can be called to automatically add the required event listeners
*/

let indeterminateCheckbox = {
	groupList: [],

	addEventListeners: function(){
		this.groupList = [];

		for(const elt of document.querySelectorAll("input[type='checkbox']")){
			if(typeof elt.attributes.master !== "undefined"){
				this.groupList.push(elt.attributes.master.value);

				elt.addEventListener("change", function(){
					indeterminateCheckbox.toggleGroup(elt.attributes.master.value);
				});
			};

			if(typeof elt.attributes.group !== "undefined"){
				for(const grp of elt.attributes.group.value.split(" ")){
					elt.addEventListener("change", function(){
						indeterminateCheckbox.toggleElement(grp);
					});
				};
			};
		};
	},

	toggleGroup: function(group){
		let masterIsChecked = document.querySelector('[master='+group+']').checked;

		for(const elt of document.querySelectorAll("input[type='checkbox']")){
			if(typeof elt.attributes.group !== "undefined" && elt.attributes.group.value.split(" ").includes(group)){
				if(masterIsChecked){
					elt.checked = true;

					if(typeof elt.attributes.master !== "undefined"){
						elt.indeterminate = false;
					};
				}
				else{
					elt.checked = false;
				};
			};
		};
	},

	toggleElement: function(group){
		let master = document.querySelector('[master='+group+']');
		let groupCheckList = {checked: 0, unchecked: 0}

		for(const elt of document.querySelectorAll("input[type='checkbox']")){
			if(typeof elt.attributes.group !== "undefined" && elt.attributes.group.value.split(" ").includes(group)){
				if(elt.checked === true){
					groupCheckList.checked++;
				}
				else{
					groupCheckList.unchecked++;
				};
			};
		};

		if(groupCheckList.unchecked === 0){
			master.checked = true;
			master.indeterminate = false;
		}
		else if(groupCheckList.checked === 0){
			master.checked = false;
			master.indeterminate = false;
		}
		else{
			master.checked = false;
			master.indeterminate = true;
		};
	}
};