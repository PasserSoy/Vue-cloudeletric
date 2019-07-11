<template>
  <div>
    <el-table v-loading="loading" element-loading-background="rgba(0, 0, 0, 0)" :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" :index="tableIndex"> </el-table-column>
      <el-table-column prop="stationName" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="stationAddress" label="地址"> </el-table-column>
    </el-table>
    <el-pagination layout="sizes,prev, pager, next, jumper, total" :page-sizes="[10, 20, 30, 40]" :pager-count="5" :current-page.sync="currentpage" :total="pagetotal" @current-change="handleCurrentChange" @size-change="sizeChange"> </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [],// 表格
        pagetotal:10,// 分页总条目数
        currentpage:1,// 当前页
        pagesize:10,// 每页条数
        tableIndex:1,// 序号
        loading:true// 表格loading        
      }
    },
    methods:{
      changeTable(){
        const params = {page:this.currentpage,rows:this.pagesize,companyId:'2c90121d67d372d30167d38c61c50015',
        flag: 'three',stationName:'',annotation:'MonitorStation',token: '5a165c4334206e9b73fdf7bf8151a3bf'};
        this.showTable(params);
      },
      showTable(params){
        const _t = this;
        _t.$ajax.interceptors.request.use(function (config) {
          // 在发送请求之前做些什么
          _t.loading = true;
          return config;
        });
        _t.$ajax.interceptors.response.use(function (config) {
          // 对响应数据做点什么
          _t.loading = false;
          return config;
        });
        _t.$ajax({
          url:'/dianli/sys/monitorStation/queryMonitorStation.v1',
          data:params
        })
        .then(res=>{
            console.log(res);
            // 格式化数据
            const tableDatas = res.data.data.list;
            _t.tableData = tableDatas;// 表格数据
            _t.pagetotal = res.data.data.count;// 分页总条目数
            _t.tableIndex = (_t.currentpage-1)*10+1;
        });
      },
      handleCurrentChange(val) {// val为当前页的值
        this.currentpage = val;
        this.changeTable();
      },
      sizeChange(val){// val为每页条数的值
        this.pagesize = val;
        this.changeTable();
      }
    },
    mounted(){
      this.changeTable();// 初始化先渲染一次
    }
  }
</script>
