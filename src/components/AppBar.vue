<template>
    <v-app-bar app color="White">
		<div id="logo">
			<img
			alt="FlashGram Logo"
			class="shrink mr-2"
			contain
			src="../assets/logo.png"
			transition="scale-transition"
			width="150"/>
		</div>
		<v-spacer></v-spacer>
		<div id="buscar" >
			<v-text-field
				flat
				solo-inverted
				min-width="600"
				hide-details
				label="Buscar"
				class="hidden-sm-and-down"
				prepend-inner-icon="mdi-magnify"
			></v-text-field>
		</div>

		<div id="subirFoto">
				<v-btn class="purple darken-1" @click="onPickFile">Subir Imagen</v-btn>
				<input type="file" style = "display: none" ref="fileImput" accept="image/*" @change="subirFoto()">
		</div>

		<v-spacer></v-spacer>

		<v-btn text small class="purple--text">
			<span class="black--text">
					<div>
						<router-link class="black--text" style="text-decoration:none"  to="/inicio"  v-bind:value="false">Cerrar Sesion</router-link>
					</div >
			</span>
			<v-icon right>exit_to_app</v-icon>
		</v-btn>
        

   </v-app-bar>
</template>

<script>
   export default {
		methods:{
			onPickFile(){
					this.$refs.fileImput.click();
			},
			onFilePicked(event){
				const files = event.target.files
				let filename = files[0].name;
				if(filename.lastIndexOf('.') <=0) {
				return alert('Please adda valid file!')
				}
				const fileReader = new FileReader()
				fileReader.addEventListener('load', () =>{
				this.imageUrl = fileReader.result
				})
				fileReader.readAsDataURL(files[0])
				this.image = files[0]
				this.subirFoto();
			},
			subirFoto () {
				const files = event.target.files
				let filename = files[0].name;
				//let file = files[0];
				if(filename.lastIndexOf('.') <=0) {
				return alert('Please adda valid file!')
				}
				const fileReader = new FileReader()
				fileReader.addEventListener('load', () =>{
				this.imageUrl = fileReader.result
				})
				fileReader.readAsDataURL(files[0])
				this.image = files[1]

				/*const foto = {
					nombre: this.filename,
					file: file
				}*/
				console.log(files);
				//this.$store.dispatch('subirFotoAction', foto)
				
			}
		}
   }
</script>



<style scoped lang="scss">
    
    #center{  
      margin-right: 20px;
         
    }
    #textfield{  
      margin-left: 20px; 
        
    }
    header {
      //display: flex;  
      position: relative;
      justify-content: center;
    }
    #buscar{
      margin-right: 30px;
    }
</style>