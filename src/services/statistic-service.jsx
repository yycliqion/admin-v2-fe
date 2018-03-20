/*
* @Author: Rosen
* @Date:   2018-01-25 21:21:46
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-31 13:33:42
*/
import MUtil        from 'utils/mm.jsx'

const _mm   = new MUtil();

class Statistic{
    // 首页数据统计
    getHomeCount() {
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        })
    }
     
}

export default Statistic;