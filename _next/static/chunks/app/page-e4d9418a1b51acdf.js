(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5258:function(n,e,t){Promise.resolve().then(t.bind(t,5370))},5370:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return page}});var o=t(7437),r=t(230),i=t(2265),s=t(802);function _templateObject(){let n=(0,r._)(["\n    width: ",";\n\n    position: relative;\n\n    border: 1px solid ",";\n    overflow: hidden;\n\n    > .decoratorYellow {\n        width: 45%;\n        height: 35%;\n\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(100%, -100%);\n        transition: all 0.18s ease-in-out;\n        transition-delay: 0.09s;\n\n        background-color: ",";\n    }\n\n    > .decoratorGreen {\n        width: 100%;\n        height: 100%;\n\n        position: absolute;\n        top: 0;\n        left: 0;\n        transform: translate(-100%, 100%);\n        transition: all 0.18s ease-in-out;\n\n        background-color: ",";\n    }\n\n    > .content {\n        padding: 16px;\n        width: 100%;\n        height: 100%;\n\n        position: sticky;\n        top: 0;\n        left: 0;\n\n        > .iconWrapper {\n            padding: 12px;\n            width: fit-content;\n            height: fit-content;\n\n            color: ",";\n            border-radius: 8px;\n            background-color: ",";\n\n            transition: all 0.18s ease-in-out;\n        }\n\n        > .category {\n            margin-top: 16px;\n\n            color: ",";\n            font-size: 24px;\n            line-height: 36px;\n            font-weight: 700;\n\n            transition: all 0.18s ease-in-out;\n        }\n\n        > .description {\n            margin-top: 8px;\n\n            color: ",";\n            font-size: 16px;\n            line-height: 24px;\n            font-weight: 400;\n        }\n    }\n\n    &:hover {\n        border-color: ",";\n\n        > .decoratorYellow {\n            background-color: ",";\n            transform: translate(0, 0);\n        }\n\n        > .decoratorGreen {\n            background-color: ",";\n            transform: translate(-8px, 8px);\n        }\n\n        > .content {\n            //\n\n            > .iconWrapper {\n                color: ",";\n                background-color: ",";\n            }\n\n            > .category {\n                color: ",";\n            }\n\n            > .description {\n                color: ",";\n            }\n        }\n    }\n"]);return _templateObject=function(){return n},n}let a=s.ZP.div.withConfig({componentId:"sc-1c971b48-0"})(_templateObject(),n=>{let{$width:e}=n;return e},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.borderColor},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.decoratorYellow},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.decoratorGreen},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.icon},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.iconWrapper},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.category},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.description},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.hover.borderColor},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.hover.decoratorYellow},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.hover.decoratorGreen},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.hover.icon},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.iconWrapper},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.hover.category},n=>{let{theme:e}=n;return e.designSystemColors.BlogCategoryCard.hover.description});function BlogCategoryCard(n){let{className:e,width:t="100%",category:r,description:i,IconComponent:s}=n;return(0,o.jsxs)(a,{className:e,$width:t,children:[(0,o.jsx)("div",{className:"decoratorYellow"}),(0,o.jsx)("div",{className:"decoratorGreen"}),(0,o.jsxs)("div",{className:"content",children:[(0,o.jsx)("div",{className:"iconWrapper",children:(0,o.jsx)(s,{size:"20px"})}),(0,o.jsx)("div",{className:"category",children:r}),(0,o.jsx)("div",{className:"description",children:i})]})]})}var l=(0,i.memo)(BlogCategoryCard),d=t(5932),c=t(211);let g=[{category:"Nextjs",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",IconComponent:d.cTn},{category:"Javascript",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",IconComponent:d.Lcw},{category:"Vue",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",IconComponent:d.kWe},{category:"Typescript",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",IconComponent:d.jNt},{category:"Rxjs",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",IconComponent:c.fKE}];function AllCategories_templateObject(){let n=(0,r._)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n\n    > .categoryItem {\n        flex: 1;\n        min-width: 300px;\n        display: inline-block;\n    }\n"]);return AllCategories_templateObject=function(){return n},n}let p=s.ZP.div.withConfig({componentId:"sc-6b24e616-0"})(AllCategories_templateObject());function AllCategories(n){let{className:e}=n;return(0,o.jsx)(p,{className:e,children:g.map(n=>{let{category:e,description:t,IconComponent:r}=n;return(0,o.jsx)(l,{className:"categoryItem",category:e,description:t,IconComponent:r},e)})})}var m=(0,i.memo)(AllCategories),h=t(6691),u=t.n(h),x=t(1396),C=t.n(x);let b={NORMAL:"normal",FEATURED:"featured"};function BlogPostCard_templateObject(){let n=(0,r._)(["\n    display: flex;\n\n    border-radius: 8px;\n    overflow: hidden;\n\n    transition: all 0.18s ease;\n\n    > .thumbnailWrapper {\n        flex-shrink: 0;\n\n        width: 40%;\n        height: auto;\n\n        position: relative;\n\n        > .thumbnail {\n            object-fit: cover;\n            object-position: center;\n        }\n    }\n\n    > .cardBody {\n        flex: 1;\n        padding: 20px 16px;\n        width: 100%;\n\n        position: relative;\n\n        color: #fff;\n\n        > .hoverDecorator {\n            width: 50%;\n            height: 32px;\n\n            position: absolute;\n            top: 0;\n            right: 0;\n            transform: translate(100%, -100%);\n            transition: all 0.18s ease-in-out;\n\n            background-color: ",";\n\n            pointer-events: none;\n\n            &::after {\n                content: '';\n                width: 50%;\n                height: 50px;\n\n                display: block;\n\n                position: absolute;\n                top: 8px;\n                right: 8px;\n                transform: translate(100%, 100%);\n                transition: all 0.18s ease-in-out;\n                transition-delay: 0.09s;\n\n                background-color: ",";\n            }\n        }\n\n        > .category {\n            color: ",";\n            font-size: 16px;\n            line-height: 24px;\n            font-weight: 600;\n        }\n\n        > .title {\n            margin-top: 20px;\n\n            color: ",";\n            font-size: 24px;\n            line-height: 30px;\n            font-weight: 700;\n        }\n\n        > .date {\n            margin-top: 16px;\n\n            color: ",";\n            font-size: 14px;\n            line-height: 22px;\n            font-weight: 500;\n        }\n\n        > .description {\n            margin-top: 16px;\n\n            color: ",";\n            font-size: 16px;\n            line-height: 24px;\n            font-weight: 400;\n            white-space: pre-line;\n\n            display: -webkit-box;\n            overflow: hidden;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 2;\n        }\n\n        > .readMoreLink {\n            margin-top: 32px;\n            padding: 16px 48px;\n\n            display: none;\n\n            color: ",";\n            font-size: 18px;\n            line-height: 28px;\n            font-weight: 700;\n\n            background-color: ",";\n        }\n    }\n\n    &:not([data-variant=","]):hover {\n        box-shadow: ",";\n\n        > .cardBody {\n            //\n\n            > .hoverDecorator {\n                transform: translate(0, 0);\n\n                &::after {\n                    transform: translate(0, 0);\n                }\n            }\n        }\n    }\n\n    &[data-variant=","] {\n        flex-flow: row-reverse;\n\n        border-radius: 0;\n\n        > .thumbnailWrapper {\n            border-radius: 8px;\n            overflow: hidden;\n\n            > .thumbnail {\n                //\n            }\n        }\n\n        > .cardBody {\n            //\n\n            > .hoverDecorator {\n                display: none;\n            }\n\n            > .category {\n                //\n            }\n\n            > .title {\n                font-size: 36px;\n                line-height: 40px;\n            }\n\n            > .date {\n                //\n            }\n\n            > .description {\n                //\n            }\n\n            > .readMoreLink {\n                display: inline-block;\n            }\n        }\n\n        &:hover {\n            box-shadow: none;\n        }\n    }\n"]);return BlogPostCard_templateObject=function(){return n},n}let f=s.ZP.div.withConfig({componentId:"sc-32a09073-0"})(BlogPostCard_templateObject(),n=>{let{theme:e}=n;return e.colors["yellow-600"]},n=>{let{theme:e}=n;return e.designSystemColors.type.h},n=>{let{theme:e}=n;return e.designSystemColors.BlogPostCard.category},n=>{let{theme:e}=n;return e.designSystemColors.BlogPostCard.title},n=>{let{theme:e}=n;return e.designSystemColors.BlogPostCard.date},n=>{let{theme:e}=n;return e.designSystemColors.BlogPostCard.description},n=>{let{theme:e}=n;return e.designSystemColors.BlogPostCard.readMoreLink.color},n=>{let{theme:e}=n;return e.designSystemColors.BlogPostCard.readMoreLink.bg},b.FEATURED,n=>{let{theme:e}=n;return e.designSystemColors.BlogPostCard.boxShadow},b.FEATURED);function BlogPostCard(n){let{className:e,variant:t=b.NORMAL,thumbnail:r,title:i,date:s,description:a}=n;return(0,o.jsxs)(f,{className:e,"data-variant":t,children:[(0,o.jsx)("figure",{className:"thumbnailWrapper",children:r&&(0,o.jsx)(u(),{className:"thumbnail",src:r,alt:i,fill:!0,priority:!0})}),(0,o.jsxs)("div",{className:"cardBody",children:[(0,o.jsx)("div",{className:"hoverDecorator"}),(0,o.jsx)("div",{className:"category",children:"Javascript"}),(0,o.jsx)("div",{className:"title",children:i}),(0,o.jsxs)("div",{className:"date",children:["작성일: ",s]}),(0,o.jsx)("div",{className:"description",children:a}),(0,o.jsx)(C(),{className:"readMoreLink",href:"#",children:"Read More"})]})]})}var y=(0,i.memo)(BlogPostCard);function AllPosts_templateObject(){let n=(0,r._)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n"]);return AllPosts_templateObject=function(){return n},n}let j=s.ZP.div.withConfig({componentId:"sc-2a5e0dea-0"})(AllPosts_templateObject());function AllPosts(n){let{className:e}=n;return(0,o.jsxs)(j,{className:e,children:[(0,o.jsx)(y,{className:"blogPost",thumbnail:"https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",title:"BlogPostCard - featured 구현 중",date:"2023-12-06",description:"UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요"}),(0,o.jsx)(y,{className:"blogPost",thumbnail:"https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",title:"BlogPostCard - featured 구현 중",date:"2023-12-06",description:"UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요"}),(0,o.jsx)(y,{className:"blogPost",thumbnail:"https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",title:"BlogPostCard - featured 구현 중",date:"2023-12-06",description:"UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요"}),(0,o.jsx)(y,{className:"blogPost",thumbnail:"https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",title:"BlogPostCard - featured 구현 중",date:"2023-12-06",description:"UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요"}),(0,o.jsx)(y,{className:"blogPost",thumbnail:"https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",title:"BlogPostCard - featured 구현 중",date:"2023-12-06",description:"UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요"})]})}var v=(0,i.memo)(AllPosts);function HomePage_templateObject(){let n=(0,r._)(["\n    > .featuredSection {\n        padding: 40px;\n\n        background-color: ",";\n\n        > .sectionContent {\n            margin-left: auto;\n            margin-right: auto;\n\n            max-width: 980px;\n        }\n    }\n\n    > .commonSection {\n        margin-left: auto;\n        margin-right: auto;\n        padding: 40px;\n\n        max-width: calc(980px + (40px * 2));\n\n        > .sectionHeader {\n            display: flex;\n            align-items: flex-start;\n            gap: 4px;\n\n            border-bottom: 4px solid ",";\n\n            > .sectionIcon {\n                //\n            }\n\n            > .sectionTitle {\n                color: ",";\n                font-size: 18px;\n                line-height: 24px;\n                font-weight: 700;\n            }\n        }\n\n        > .sectionContent {\n            margin-top: 8px;\n        }\n    }\n"]);return HomePage_templateObject=function(){return n},n}let P=s.ZP.div.withConfig({componentId:"sc-fb0bc121-0"})(HomePage_templateObject(),n=>{let{theme:e}=n;return e.designSystemColors.type.d},n=>{let{theme:e}=n;return e.designSystemColors.type.e},n=>{let{theme:e}=n;return e.designSystemColors.HomePage.labelColor});function HomePage(){return(0,o.jsxs)(P,{children:[(0,o.jsx)("section",{className:"featuredSection",children:(0,o.jsx)(y,{className:"sectionContent",variant:b.FEATURED,thumbnail:"https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",title:"BlogPostCard - featured 구현 중",date:"2023-12-06",description:"UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요"})}),(0,o.jsxs)("section",{className:"commonSection",children:[(0,o.jsxs)("div",{className:"sectionHeader",children:[(0,o.jsx)(d.Frr,{className:"sectionIcon",size:"20px",strokeWidth:"2px"}),(0,o.jsx)("div",{className:"sectionTitle",children:"All Categories"})]}),(0,o.jsx)(m,{className:"sectionContent"})]}),(0,o.jsxs)("section",{className:"commonSection",children:[(0,o.jsxs)("div",{className:"sectionHeader",children:[(0,o.jsx)(d.Frr,{className:"sectionIcon",size:"20px",strokeWidth:"2px"}),(0,o.jsx)("div",{className:"sectionTitle",children:"All Blog Posts"})]}),(0,o.jsx)(v,{className:"sectionContent"})]})]})}var w=(0,i.memo)(HomePage),page=function(){return(0,o.jsx)(w,{})}}},function(n){n.O(0,[465,281,576,396,282,971,472,744],function(){return n(n.s=5258)}),_N_E=n.O()}]);