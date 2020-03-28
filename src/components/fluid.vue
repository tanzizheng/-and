<template>
  <div class="filex">
    <div class="border-anim">
      <div class="border-anim-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>
<style>
.filex {
  --border-anim-size: 3em;
  --border-anim-size-w:15.5rem;
	--border-anim-width: calc(var(--border-anim-size) / 20);
	--border-anim-width-double: calc(var(--border-anim-width)*2);
	--border-anim-duration: 5s;
	--border-anim-border-color: #67F1D7;
	--border-anim-hover-color: LightCoral;
}
.border-anim {
	width: var(--border-anim-size-w);
	height: var(--border-anim-size);
	position: relative;
	border: 1px solid  var(--border-anim-border-color);
}
.border-anim::before, .border-anim::after {
	content: '';
	position: absolute;
	border: var(--border-anim-width) solid var(--border-anim-border-color);
	/* 让边框在内容区域内绘制 */
	box-sizing: border-box;
	transition: background-color 1s;
}
.border-anim::before {
	animation: anim-border-run calc(var(--border-anim-duration) * 2) linear infinite;
}
.border-anim::after {
	animation: anim-border-run calc(var(--border-anim-duration) * 2) calc(var(--border-anim-duration) / -1) linear infinite;
}
.border-anim:hover::before, .border-anim:hover::after {
	background-color: var(--border-anim-hover-color);
}
.border-anim-content {
	width: calc(100% - var(--border-anim-width-double));
	height: calc(100% - var(--border-anim-width-double));
	margin: var(--border-anim-width);
	border: 1px solid var(--border-anim-border-color);
}
@keyframes anim-border-run {
	/* 这里将动画分成了4步；也可以改为2步，这时before和after用的就要是两套keyframes了 */
	from, to {
		width: var(--border-anim-width-double);
		height: 100%;
		top: 0;
		left: 0;
	}
	25% {
		width: 100%;
		height: var(--border-anim-width-double);
		top: calc(100% - var(--border-anim-width-double));
		left: 0;
	}
	50% {
		width: var(--border-anim-width-double);
		height: 100%;
		top: 0;
		left: calc(100% - var(--border-anim-width-double));
	}
	75% {
		width: 100%;
		height: var(--border-anim-width-double);
		top: 0%;
		left: 0%;
	}
	/* 需要设置临界效果，否则会渐变 */
	from, to, 24.9% {
		border-left-color: var(--border-anim-border-color);
		border-top-color: transparent;
		border-right-color: transparent;
		border-bottom-color: var(--border-anim-border-color);
	}
	25%, 49.9% {
		border-left-color: transparent;
		border-top-color: transparent;
		border-right-color: var(--border-anim-border-color);
		border-bottom-color: var(--border-anim-border-color);
	}
	50%, 74.9% {
		border-left-color: transparent;
		border-top-color: var(--border-anim-border-color);
		border-right-color: var(--border-anim-border-color);
		border-bottom-color: transparent;
	}
	75%, 99.9% {
		border-left-color: var(--border-anim-border-color);
		border-top-color: var(--border-anim-border-color);
		border-right-color: transparent;
		border-bottom-color: transparent;
	}
}
</style>
