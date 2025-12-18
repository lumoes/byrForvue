import type { Component } from 'vue'


import IconTech from "@/assets/image/department/icon-tech.svg?component"
import IconMedia from "@/assets/image/department/icon-media.svg?component"
import IconProduct from "@/assets/image/department/icon-product.svg?component"  
import IconDesign from "@/assets/image/department/icon-design.svg?component"


import MediaDescription from './MediaDescription.vue'
import DesignDescription from './DesignDescription.vue'
import TechDescription from './TechDescription.vue'
import ProductDescription from './ProductDescription.vue'



export interface Department {
  name: string
  icon: Component
  content: Component
}


export const departments: Department[] = [
  {
    name: '技术组',
    icon: IconTech,
    content: TechDescription,
  },
  {
    name: '新媒体组',
    icon: IconMedia,
    content: MediaDescription,
  },
  {
    name: '产品运营组',
    icon: IconProduct,
    content: ProductDescription,
  },
  {
    name: '设计组',
    icon: IconDesign,
    content: DesignDescription,
  },
]
