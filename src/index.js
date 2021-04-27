import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.querySelector("#root"));




// const Heading = styled.h3`
//   text-transform: uppercase;
//   font-weight: bold;
//   font-size: 1.1rem;
//   margin-top: 0;
//   margin-bottom: ${props => (props.noMarginBottom ? 0 : "1rem")};
//   color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
// `;

// const HeadingLink = Heading.withComponent("li");

// const LinkList = styled.ul`
//   li {
//     margin-bottom: 1rem;
//   }

//   li:last-of-type {
//     margin-bottom: 0;
//   }

//   margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
// `;

// const Icon = styled.div`
//   width: 13px;
//   height: 13px;
//   margin-right: 13px;
//   background-color: var(--blue);
//   opacity: 0.8;
//   display: inline-block;
// `;

// const DropdownSection = styled.div`
//   padding: var(--spacer);
//   position: relative;
//   z-index: 1;
// `;

// const CompanyDropdownEl = styled.div`
//   width: 23rem;
// `;

// const CompanyDropdown = () => {
//   return (
//     <CompanyDropdownEl>
//       <DropdownSection>
//         <ul>
//           <HeadingLink>
//             <a href="/">
//               <Icon /> About Stripe
//             </a>
//           </HeadingLink>
//           <HeadingLink>
//             <a href="/">
//               <Icon />Customers
//             </a>
//           </HeadingLink>
//           <HeadingLink>
//             <a href="/">
//               <Icon />Jobs
//             </a>
//           </HeadingLink>
//           <HeadingLink noMarginBottom>
//             <a href="/">
//               <Icon />Environment
//             </a>
//           </HeadingLink>
//         </ul>
//       </DropdownSection>
//       <DropdownSection>
//         <div>
//           <Heading>
//             <Icon />From the Blog
//           </Heading>
//           <LinkList marginLeft="25px">
//             <li>
//               <a href="/">Stripe Atlas &rsaquo;</a>
//             </li>
//             <li>
//               <a href="/">Stripe Home &rsaquo;</a>
//             </li>
//             <li>
//               <a href="/">Improved Fraud Detection &rsaquo;</a>
//             </li>
//           </LinkList>
//         </div>
//       </DropdownSection>
//     </CompanyDropdownEl>
//   );
// };

// const DevelopersDropdownEl = styled.div`
//   width: 25rem;
// `;

// const Flex = styled.div`
//   display: flex;
//   > div:first-of-type {
//     margin-right: 48px;
//   }
// `;

// const DevelopersDropdown = () => {
//   return (
//     <DevelopersDropdownEl>
//       <DropdownSection>
//         <div>
//           <Heading>Documentation</Heading>
//           <p>Start integrating Stripe&rsquo;s products and tools</p>
//           <Flex>
//             <div>
//               <h4>Get Started</h4>
//               <LinkList>
//                 <li>
//                   <a href="/">Elements</a>
//                 </li>
//                 <li>
//                   <a href="/">Checkout</a>
//                 </li>
//                 <li>
//                   <a href="/">Mobile apps</a>
//                 </li>
//               </LinkList>
//             </div>
//             <div>
//               <h4>Popular Topics</h4>
//               <LinkList>
//                 <li>
//                   <a href="/">Apple Pay</a>
//                 </li>
//                 <li>
//                   <a href="/">Testing</a>
//                 </li>
//                 <li>
//                   <a href="/">Launch Checklist</a>
//                 </li>
//               </LinkList>
//             </div>
//           </Flex>
//         </div>
//       </DropdownSection>
//       <DropdownSection>
//         <ul>
//           <HeadingLink>
//             <a href="/">
//               <Icon /> Full API Reference
//             </a>
//           </HeadingLink>
//           <HeadingLink>
//             <a href="/">
//               <Icon /> API Status
//             </a>
//           </HeadingLink>
//           <HeadingLink noMarginBottom>
//             <a href="/">
//               <Icon /> Open Source
//             </a>
//           </HeadingLink>
//         </ul>
//       </DropdownSection>
//     </DevelopersDropdownEl>
//   );
// };

// const ProductsDropdownEl = styled.div`
//   width: 29rem;
// `;

// const Logo = styled.div`
//   width: 38px;
//   height: 38px;
//   margin-right: 16px;
//   border-radius: 100%;
//   opacity: 0.6;
//   background-color: ${({ color }) => `var(--${color})`};
// `;

// const SubProductsList = styled.ul`
//   li {
//     display: flex;
//     margin-bottom: 1rem;
//   }
//   h3 {
//     margin-right: 1rem;
//     width: 3.2rem;
//     display: block;
//   }
//   a {
//     color: var(--dark-grey);
//   }
// `;

// const ProductsSection = styled.ul`
//   li {
//     display: flex;
//   }
// `;

// const WorksWithStripe = styled.div`
//  border-top: 2px solid #fff;
//   display:flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: var(--spacer);
//   padding-top: var(--spacer);
// }
// h3 {
//   margin-bottom: 0;
// }
// `;

// const ProductsDropdown = () => {
//   return (
//     <ProductsDropdownEl>
//       <DropdownSection>
//         <ProductsSection>
//           <li>
//             <div>
//               <Logo color="blue" />
//             </div>
//             <div>
//               <Heading color="blue">Payments</Heading>
//               <p>A complete payments platform</p>
//             </div>
//           </li>
//           <li>
//             <div>
//               <Logo color="green" />
//             </div>
//             <div>
//               <Heading color="green">Billing</Heading>
//               <p>Build and scale your recurring business model</p>
//             </div>
//           </li>
//           <li>
//             <div>
//               <Logo color="teal" />
//             </div>
//             <div>
//               <Heading color="teal">Connect</Heading>
//               <p style={{ marginBottom: 0 }}>
//                 Everything platforms need to get sellers paid
//               </p>
//             </div>
//           </li>
//         </ProductsSection>
//       </DropdownSection>
//       <DropdownSection>
//         <SubProductsList>
//           <li>
//             <Heading noMarginBottom>Sigma</Heading>
//             <div>Your business data at your fingertips.</div>
//           </li>
//           <li>
//             <Heading noMarginBottom>Atlas</Heading>
//             <div>The best way to start an internet business.</div>
//           </li>
//           <li>
//             <Heading noMarginBottom>Radar</Heading>
//             <div>Fight fraud with machine learning.</div>
//           </li>
//         </SubProductsList>
//         <WorksWithStripe>
//           <Heading noMarginBottom>
//             <a href="/">
//               <Icon /> Works with Stripe
//             </a>
//           </Heading>
//         </WorksWithStripe>
//       </DropdownSection>
//     </ProductsDropdownEl>
//   );
// };








