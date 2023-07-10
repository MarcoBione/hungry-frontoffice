<template>
    <section>
        <div class="pizza">
        <div class="slice">
            <div class="relative">
                <div class="sauce"></div>
                <div class="cheese"></div>
                <div class="tomato"></div>
                <div class="olive"></div>
                <div class="olive two"></div>
                <div class="olive three"></div>
                <div class="capsicum"></div>
                <div class="capsicum two"></div>
                <div class="capsicum three"></div>
                <div class="tomato two"></div>
                <div class="tomato three"></div>
                <div class="tomato four"></div>
            </div>
        </div>
        <div class="slice two">
            <div class="relative">
                <div class="sauce"></div>
                <div class="cheese"></div>
                <div class="tomato"></div>
                <div class="olive"></div>
                <div class="olive two"></div>
                <div class="olive three"></div>
                <div class="capsicum"></div>
                <div class="capsicum two"></div>
                <div class="capsicum three"></div>
                <div class="tomato two"></div>
                <div class="tomato three"></div>
                <div class="tomato four"></div>
            </div>
        </div>
        <div class="slice three">
            <div class="relative">
                <div class="sauce"></div>
                <div class="cheese"></div>
                <div class="tomato"></div>
                <div class="olive"></div>
                <div class="olive two"></div>
                <div class="olive three"></div>
                <div class="capsicum"></div>
                <div class="capsicum two"></div>
                <div class="capsicum three"></div>
                <div class="tomato two"></div>
                <div class="tomato three"></div>
                <div class="tomato four"></div>
            </div>
        </div>
        <div class="slice four">
            <div class="relative">
                <div class="sauce"></div>
                <div class="cheese"></div>
                <div class="tomato"></div>
                <div class="olive"></div>
                <div class="olive two"></div>
                <div class="olive three"></div>
                <div class="capsicum"></div>
                <div class="capsicum two"></div>
                <div class="capsicum three"></div>
                <div class="tomato two"></div>
                <div class="tomato three"></div>
                <div class="tomato four"></div>
            </div>
        </div>
        <div class="slice five">
            <div class="relative">
                <div class="sauce"></div>
                <div class="cheese"></div>
                <div class="tomato"></div>
                <div class="olive"></div>
                <div class="olive two"></div>
                <div class="olive three"></div>
                <div class="capsicum"></div>
                <div class="capsicum two"></div>
                <div class="capsicum three"></div>
                <div class="tomato two"></div>
                <div class="tomato three"></div>
                <div class="tomato four"></div>
            </div>
        </div>
        <div class="slice six">
            <div class="relative">
                <div class="sauce"></div>
                <div class="cheese"></div>
                <div class="tomato"></div>
                <div class="olive"></div>
                <div class="olive two"></div>
                <div class="olive three"></div>
                <div class="capsicum"></div>
                <div class="capsicum two"></div>
                <div class="capsicum three"></div>
                <div class="tomato two"></div>
                <div class="tomato three"></div>
                <div class="tomato four"></div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="shadowed-goo">

                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="16" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                    result="shadow" />
                <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                <feComposite in2="shadow" in="goo" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
        </defs>
    </svg>
    </section>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.slice {
    top: 10px;
    left: 130px;
    background-color: #cca156;
    position: absolute;
    width: 170px;
    height: 150px;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
    border-radius: 45%;
}

.relative {
    position: relative;
}

.sauce {
    background-color: #F03727;
    position: absolute;
    width: 150px;
    height: 150px;
    top: 16px;
    left: 8px;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
    border-radius: 40%;
}

.pizza {
    animation: pizza 5s infinite;
    transform-origin: center center;
    position: relative;
    max-width: 400px;
    height: 400px;
    margin: 10% auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes pizza {
    100% {
        transform: rotate(360deg);
        transform-origin: center;
    }
}

.cheese {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 8px;
    left: 18px;
    clip-path: polygon(64% 14%, 84% 14%, 87% 39%, 72% 56%, 68% 76%, 48% 100%, 43% 82%, 27% 65%, 12% 20%, 37% 11%);
    border-radius: 50%;
    background-color: #edb74c
}

.tomato {
    background-color: #F03727;
    width: 27px;
    height: 25px;
    position: absolute;
    z-index: 20;
    border-radius: 100%;
    left: 60px;
    top: 62px;
    border: 2px solid #d93021;
}

.tomato.two {
    width: 14px;
    height: 13px;
    top: 32px;
    left: 38px;
}

.tomato.three {
    width: 16px;
    height: 13px;
    top: 45px;
    left: 106px;
}

.tomato.four {
    width: 17px;
    height: 19px;
    top: 98px;
    left: 76px;
}

.olive {
    border: 5px solid #504221;
    width: 13px;
    height: 13px;
    left: 94px;
    top: 46px;
    position: absolute;
    z-index: 40;
    border-radius: 100%;
}

.olive.two {
    width: 10px;
    height: 10px;
    left: 73px;
    top: 24px;
}

.capsicum {
    clip-path: polygon(50% 0%, 33% 20%, 25% 43%, 26% 69%, 55% 100%, 29% 94%, 8% 77%, 0% 43%, 17% 12%);
    background-color: green;
    width: 16px;
    height: 40px;
    position: absolute;
    z-index: 50;
    transform: rotate(150deg);
    left: 100px;
    top: 20px;
}

.capsicum.two {
    transform: rotate(-150deg);
    left: 80px;
    width: 18px;
    height: 30px;
    top: 80px;
}

.capsicum.three {
    transform: rotate(-40deg);
    left: 64px;
    width: 19px;
    height: 30px;
    top: 40px;
}

.olive.three {
    width: 8px;
    height: 8px;
    left: 54px;
    top: 89px;
}

.slice.two {
    transform: rotate(60deg);
    left: 197px;
    top: 47px;
}

.slice.three {
    transform: rotate(-60deg);
    left: 64px;
    top: 47px;
}

.slice.four {
    transform: rotate(-120deg);
    left: 63px;
    top: 123px;
}

.slice.five {
    transform: rotate(-180deg);
    left: 130px;
    top: 161px;
}

.slice.six {
    transform: rotate(120deg);
    left: 196px;
    top: 123px;
}

body {
    background-color: black;
}

.slice.two .olive.two {
    top: 30px;
    left: 50px;
}

.slice.four .olive.two {
    top: 30px;
    left: 70px;
}

.slice.three .olive.two {
    top: 45px;
    left: 40px;
}

.slice.three .tomato.two {
    top: 65px;
    left: 100px;
}

.slice.three .tomato.three {
    top: 35px;
    left: 40px;
}

.slice.three .tomato {
    top: 15px;
    left: 80px;
}

.slice.three .tomato.four {
    top: 85px;
    left: 80px;
}

.slice.four .tomato {
    top: 85px;
    left: 80px;
}

.slice.four .tomato.two,
.slice.five .olive.two,
.slice.three .tomato.three {
    top: 35px;
    left: 80px;
}

.slice.four .tomato.three,
.slice.two .capsicum.three {
    top: 65px;
    left: 60px;
}

.slice.four .tomato.four,
.slice.two .capsicum.two {
    top: 25px;
    left: 120px;
}

.slice.four .olive.three,
.slice.three capsicum .three,
.slice.three .tomato.three,
.slice.four .capsicum.three {
    top: 15px;
    left: 60px;
}

.slice.four .olive.two,
.slice.six .olive.two,
.slice.five .tomato.two,
.slice.three .capsicum.three {
    top: 95px;
    left: 80px;
}

body {
    filter: url("#goo");
}

.slice.four {
    animation: pull 5s ease-out infinite;

}

@keyframes pull {
    0% {
        left: 63px;
        top: 123px;
    }

    100% {
        left: 20px;
        top: 150px;
    }
}</style>