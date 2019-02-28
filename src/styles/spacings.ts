import { getEmSize } from './mixins'

export default `
.mt-8 {margin-top: ${getEmSize(8)}}
.mt-16 {margin-top: ${getEmSize(16)}}
.mt-24 {margin-top: ${getEmSize(24)}}
.mt-32 {margin-top: ${getEmSize(32)}}
.mt-64 {margin-top: ${getEmSize(64)}}
.mt-120 {margin-top: ${getEmSize(120)}}
.pt-120 {padding-top: ${getEmSize(120)}}


.mb-8 {margin-bottom: ${getEmSize(8)}}
.mb-16 {margin-bottom: ${getEmSize(16)}}
.mb-24 {margin-bottom: ${getEmSize(24)}}
.mb-32 {margin-bottom: ${getEmSize(32)}}
.mb-64 {margin-bottom: ${getEmSize(64)}}
.mb-120 {margin-bottom: ${getEmSize(120)}}
.pb-120 {padding-bottom: ${getEmSize(120)}}

.mv-8 {margin: ${getEmSize(8)} 0}
.mv-16 {margin: ${getEmSize(16)} 0}
.mv-24 {margin: ${getEmSize(24)} 0}
.mv-32 {margin: ${getEmSize(32)} 0}
.mv-64 {margin: ${getEmSize(64)} 0}
.mv-120 {margin: ${getEmSize(120)} 0}
.pv-120 {padding: ${getEmSize(120)} 0}


.ml-8 {margin-left: ${getEmSize(8)}}
.ml-16 {margin-left: ${getEmSize(16)}}
.ml-24 {margin-left: ${getEmSize(24)}}
.ml-32 {margin-left: ${getEmSize(32)}}
.ml-64 {margin-left: ${getEmSize(64)}}
.ml-120 {margin-left: ${getEmSize(120)}}

.mr-8 {margin-right: ${getEmSize(8)}}
.mr-16 {margin-right: ${getEmSize(16)}}
.mr-24 {margin-right: ${getEmSize(24)}}
.mr-32 {margin-right: ${getEmSize(32)}}
.mr-64 {margin-right: ${getEmSize(64)}}
.mr-120 {margin-right: ${getEmSize(120)}}

.mh-8 {margin: 0 ${getEmSize(8)}}
.mh-16 {margin: 0 ${getEmSize(16)}}
.mh-24 {margin: 0 ${getEmSize(24)}}
.mh-32 {margin: 0 ${getEmSize(32)}}
.mh-64 {margin: 0 ${getEmSize(64)}}
.mh-120 {margin: 0 ${getEmSize(120)}}

.p-32 {padding:  ${getEmSize(32)}}
`
