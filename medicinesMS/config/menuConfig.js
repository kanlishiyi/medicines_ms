const menuConfig=[
    {
        id:"m",
        title:"药品管理",
        item:[
            {text:"药品库存信息",url:"/Stock/stockList"},
            {text:"添加药品信息",url:"/Stock/addMedicines"},
            {text:"库存紧张药品",url:"/Stock/stockTips"}
        ]
    },
    {
        id:"s",
        title:"进出库管理",
        item:[
            {text:"药品入库",url:"/Stock_IO/stockIn"},
            {text:"药品出库",url:"/Stock_IO/stockOut"},
            {text:"入库信息",url:"/Stock_IO/stockInList"},
            {text:"出库信息",url:"/Stock_IO/stockOutList"}
        ]
    },{
        id:"a",
        title:"验收人管理",
        item:[
            {text:"人员列表",url:"#"}            
        ]
    }
]

module.exports=menuConfig;