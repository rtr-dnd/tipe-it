<template>
<div class="line-wrapper">
  <div class="line" v-if="contentIndex!=0" v-on:click="add(contentIndex)" 
      v-bind:id="'border-'+contentIndex">
    <div class="add-item">+<span class="shortcut-text">⌘ + Enter / Ctrl + Enter</span></div>
  </div>
  <div class="line line-top" v-if="contentIndex==0" v-on:click="add(contentIndex)" 
      v-bind:id="'border-'+contentIndex">
    <div class="add-item">+</div>
  </div>
</div>
</template>

<script>
import PropertyStore from '../models/PropertyStore'
import autosize from 'autosize'
import { setTimeout } from 'timers'

export default {
	name: 'Border',
	props: {
		contentIndex: {		
			required: true
		}
	},
	methods: {
		add: function (place) {
			// eslint-disable-next-line
			PropertyStore.state.property.content.splice(place, 0, {text: '', title: ''})
			this.$nextTick(function () {
        var thisBorder = document.getElementById('border-'+this.contentIndex)
        thisBorder.classList.add('none')
        document.getElementById("texts").scrollTop += 60
        setTimeout(function(){thisBorder.classList.remove('none')}, 100)
        document.getElementById('textarea-'+this.contentIndex).focus()
				// eslint-disable-next-line
        autosize.update(document.querySelectorAll('textarea'))
        autosize(document.querySelectorAll('textarea'))
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.none {
  display: none;
  opacity: 0;
  &:hover{
    display: none;
    opacity: 0;
  }
}
.line {
  height: 16px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.1) transparent transparent transparent;
  display: flex;
  transition: border-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.1s;
  align-items: center;
  cursor: pointer;

  .add-item{
    width: 100%;
    // text-align: center;
    font-size: 20px;
    margin: 0 32px;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.1s;
    color: rgba(0, 0, 0, 0.5);
    vertical-align: middle;

    @media (max-width: 600px) {
      margin: 0 12px;
    }
  }
  .shortcut-text {
    margin-left: 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
    transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    vertical-align: middle;
    text-align: right;
  }
  &:hover{
    height: 72px;
    margin-bottom: 16px;
    border-color: rgba(0, 0, 0, 0.1) transparent;
    .add-item{
      opacity: 1;
    }
  }
}
.line-top{
  border-top: none !important;
  &:hover{
    border-top: none !important;    
  }
}
</style>
