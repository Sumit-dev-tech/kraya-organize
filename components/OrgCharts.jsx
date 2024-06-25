"use client"
import React, {useState} from 'react';
import {OrganizationChart } from 'primereact/organizationchart';
import Image from 'next/image';
// import { classNames } from 'primereact/utils';
import '@/styles/orgcharts.css';
import 'primereact/resources/themes/saga-blue/theme.css'; /* Theme CSS */
import 'primereact/resources/primereact.min.css'; /* Core CSS */
import 'primeicons/primeicons.css'; /* Icons */

export default function OrgCharts(){
    const [data] = useState([
        {    
            type: 'person',
            className: 'border-t-slate-500 border-t-[2px] shadow text-slate-900',
            style: {borderRadius: '5px'},
            expanded: true,
            data:{
                name: 'John',
                photo: '/user.png',
                description: 'CEO',
            },
            children: [
                {
                    className: 'text-slate-100 shadow py-3 px-2 w-[200px] bg-blue-500',
                    style: {borderRadius: '30px'},
                    label: 'Human Resource',
                    expanded: true,
                    children: [
                        {    
                            type: 'person',
                            className: 'border-t-slate-500 border-t-[2px] shadow ',
                            style: {borderRadius: '5px'},
                            data: {
                                name: 'John',
                                photo: '/user.png',
                            },     
                        },
                        {
                            type: 'person',
                            className: 'border-t-slate-500 border-t-[2px] shadow',
                            style: {borderRadius: '5px'},
                            data: {
                                name: 'John',
                                photo: '/user.png',
                            },     
                        }
                    ],
                }, 
                {
        className: 'text-slate-100 shadow py-3 px-2 w-[200px] rounded-[30px] bg-red-500',
        style: {borderRadius: '30px'},
        label: 'Finance',
        expanded: true,
            children: [
                        {
                            type: 'person',
                            className: 'border-t-slate-500 border-t-[2px] shadow',
                            style: {borderRadius: '5px'},
                            data: {
                                name: 'John',
                                photo: '/user.png',
                            },    
                        },
                        {
                            type: 'person',
                            className: 'border-t-slate-500 border-t-[2px] shadow',
                            style: {borderRadius: '5px'},
                            data: {
                                name: 'John',
                                photo: '/user.png',
                            },    
                        },
                        {
                            type: 'person',
                            className: 'border-t-slate-500 border-t-[2px] shadow',
                            style: {borderRadius: '5px'},
                            data: {
                                name: 'John',
                                photo: '/user.png',
                            },    
                        },
                        
                    ],
                }
            ],
        }
    ]);

    const nodeTemplate = (node)=>{
        if (node.type === 'person'){
            return (
            <div className='flex flex-col'>
                <div className='w-[150px] p-2 flex flex-col justify-center items-center gap-3 '>
                <Image src={node.data.photo} alt={node.data.name} width={80} height={80} className='mt-[-30px]'/>
                <h3 className='text-black text-'>{node.data.name}</h3>
                <p className='text-black'>{node.data.description}</p>
               </div> 
            </div>
                 
            );
        }

        const childrenCount = node.children ? ` (${node.children.length})` : '';
        return node.label + childrenCount;
        
    }

 return(
    <div className="card overflow-x-auto">
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} className='py-10' />
    </div>
    );
}

