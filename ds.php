<?php require("header.php");?>
<body class="bg_ds">

<div class="topline"></div>
<script type="text/javascript" src="script/diy.js"></script>
<!--header-->
<div class="header">
    <h1 class="fl"><a href="index.php" class="logo">广佛智城-智造无限体验</a></h1>
    <ul class="nav fr">
        <li><a href="index.php">首页<span>HOME</span></a></li>
        <li class="cur_i"><a href="ds.php">体验之都<span>FACITIES</span></a></li>
        <li><a href="fw.php">配套设施<span>SUPPORTING</span></a></li>
        <li><a href="dt.php">资讯动态<span>NEWS</span></a></li>
        <li><a href="about.php">关于智城<span>BRAND</span></a></li>
        <li><a href="lx.php">招商租赁<span>CONTACT</span></a></li>
        <li class="cur nav_ds" id="navCur"></li>
    </ul>
</div>

<!--主内容-->
<div class="cont cont_ds" id="cont"> 
    <!--1--> 	
    <div class="contbox">
        <div class="ds_bg2">
            <!--滚动内容-->
            <div class="slide slide_ct2">        	
                <div class="slide_w">
                    <ul class="slide_c slide_list2">
                    	<?php
                    		$ds = $db->rows_key('select *from info_experience where is_show = 1 order by edittime desc ');
                    		if(is_array($ds)){
                        		foreach($ds as $i=>$irs){
                    	?>
                        <li data="<?php echo $irs['id']?>">
                            <a href="#"><img src="<?php echo $irs['path'];?>" /></a>
                            <div class="slide_tit"><b><?php echo intval($i+1);?></b><a><?php echo $experience_type[$irs['type_id']];?></a></div>
                            <div class="slide_p">
                                <a href="#" data="<?php echo $irs['id']?>" type="info_experience"><?php echo $irs['title'];?></a>
                                <p><?php echo $fc->shortStr($irs['info'],68,false,true);?></p>
                            </div>
                        </li>
                        <?php }} ?>
                    </ul>
                </div>
                <p class="btnSide">
                    <b class="btn_lf"></b>
                    <b class="btn_rt"></b>
                </p>
            </div>
            <!--最新动态-->
            <div class="ds_dt">
                <div class="ds_news">
                    <h3 class="title tit_hd"><i class="ico_hd"></i>最新动态</h3>
                    <ul class="list_dt"> 
                   		<?php
                   			
                   			foreach($experience_type as $k => $v){
                   				
                   				// 最新动态
            					$experience[] = $db->rows_key("select * from info_experience where type=2 and type_id=$k  order by edittime desc  limit 1 ");
                   			}
                   			
            				// 最新动态
//            				$experience = $db->rows_key("select * from info_experience where type=2 group by type_id  order by edittime desc  limit 4 ");
            				
                    		if(is_array($experience)){
                    		  foreach($experience as $rw){
                    		  	if(!empty($rw)){	
                        		foreach($rw as $i=>$irs){
                    	?>
	                    <li data="<?php echo $irs['id']?>" type="info_experience">
	                        <p class="date"><span><?php echo $fc->show_time($irs['edittime'],12); ?></span><?php echo $fc->show_time($irs['edittime'],11);?></p>
	                        <a href="#"><strong><?php echo $fc->shortStr($irs['title'],14,false,true);?></strong><span><?php echo $fc->shortStr($irs['info'],17,false,true); ?></span></a>
	                    </li>
	                   	<?php }}}}?>
                    </ul>
                </div>
            </div>
        </div>
        <!--漂浮块-->
        <div class="floatBox pos1">
            <img src="images/s13.png" class="fb13" />
            <img src="images/s11.png" class="fb14" />
            <img src="images/s14.png" class="fb15" />
            <img src="images/s10.png" class="fb16" /> 
        </div>
    </div>
    <!--1--> 	
    <div class="contbox">
        <div class="ds_bg1">
            <h3 class="title tit_ct"><i class="ico_ct"></i>传统企业转型电子商务</h3>
            <!--滚动内容-->
            <div class="slide slide_ct">        	
                <div class="slide_w">
                    <ul class="slide_c slide_list">
                    	<?php
                    		$dz_exp = $db->rows_key('select *from info_experience where type_id = 1 order by edittime desc ');
                    		if(is_array($dz_exp)){
                        		foreach($dz_exp as $i=>$irs){
                    	?>
                       	<li><a data="<?php echo $irs['id']; ?>" type="info_experience" href="#" ><img src="<?php echo $irs['path'];?>" /></a><a href="#"   data="<?php echo $irs['id']; ?>" type="info_experience"><?php echo $irs['title'];?></a><p><?php echo $fc->shortStr($irs['info'],68,false,true);?></p></li>
                        <?php }} ?>
                    </ul>
                </div>
                <p class="btnSide">
                    <b class="btn_lf"></b>
                    <b class="btn_rt"></b>
                </p>
            </div>
            
        </div>
        <!--漂浮块-->
        <div class="floatBox pos1">
            <img src="images/s13.png" class="fb8" />
            <img src="images/s10.png" class="fb9" />
            <img src="images/s12.png" class="fb10" />
            <img src="images/s14.png" class="fb11" id="db1" />
            <img src="images/s15.png" class="fb12" />
        </div>
    </div>
    <!--2--> 	
    <div class="contbox">
        <div class="ds_bg1">
           <h3 class="title tit_ds"><i class="ico_ds"></i>电子商务体验</h3>
            <!--滚动内容-->
            <div class="slide slide_ct">        	
                <div class="slide_w">
                    <ul class="slide_c slide_list">
                    	<?php
                    		$dz_exp = $db->rows_key('select *from info_experience where type_id = 2 order by edittime desc ');
                    		if(is_array($dz_exp)){
                        		foreach($dz_exp as $i=>$irs){
                    	?>
                       	<li><a data="<?php echo $irs['id']; ?>" type="info_experience" href="#"><img src="<?php echo $irs['path'];?>" /></a><a data="<?php echo $irs['id']; ?>" type="info_experience" href="#"><?php echo $irs['title'];?></a><p><?php echo $fc->shortStr($irs['info'],68,false,true);?></p></li>
                        <?php }} ?>
                    </ul>
                </div>
                <p class="btnSide">
                    <b class="btn_lf"></b>
                    <b class="btn_rt"></b>
                </p>
            </div>
            
        </div>
        <!--漂浮块-->
        <div class="floatBox pos1">
            <img src="images/s13.png" class="fb8" />
            <img src="images/s12.png" class="fb10" />
            <img src="images/s14.png" class="fb11" />
            <img src="images/s15.png" class="fb12" />
        </div>
    </div>
    <!--3--> 	
    <div class="contbox">
        <div class="ds_bg1">
            <h3 class="title tit_ty"><i class="ico_ty"></i>体验经济</h3>
            <!--滚动内容-->
            <div class="slide slide_ct">        	
                <div class="slide_w">
                    <ul class="slide_c slide_list">
                    	<?php
                    		$jj_exp = $db->rows_key('select *from info_experience where type_id = 3 order by edittime desc ');
                    		if(is_array($jj_exp)){
                        		foreach($jj_exp as $i=>$irs){
                    	?>
                       	<li><a href="#" data="<?php echo $irs['id']; ?>" type="info_experience"><img src="<?php echo $irs['path'];?>" /></a><a href="#" data="<?php echo $irs['id']; ?>" type="info_experience"><?php echo $irs['title'];?></a><p><?php echo $fc->shortStr($irs['info'],68,false,true);?></p></li>
                        <?php }} ?>
                        <!--<li><a href="#"><img src="images/ds_img1.png" /></a><a href="#">租金优惠：2013年12月31日前签约客户享受租金6折</a><p>免租期优惠："2013年内认租的客户将根据租赁面积大小享有6-12个月的免租期免租期优惠："2013年内认租的客户将根据租赁面积大小享有</p></li>
                        <li><a href="#"><img src="images/ds_img2.png" /></a><a href="#">租金优惠：2013年12月31日前签约客户享受租金6折</a><p>免租期优惠："2013年内认租的客户将根据租赁面积大小享有6-12个月的免租期免租期优惠："2013年内认租的客户将根据租赁面积大小享有</p></li>
                        <li><a href="#"><img src="images/ds_img3.png" /></a><a href="#">租金优惠：2013年12月31日前签约客户享受租金6折</a><p>免租期优惠："2013年内认租的客户将根据租赁面积大小享有6-12个月的免租期免租期优惠："2013年内认租的客户将根据租赁面积大小享有</p></li>
                        <li><a href="#"><img src="images/ds_img4.png" /></a><a href="#">租金优惠：2013年12月31日前签约客户享受租金6折</a><p>免租期优惠："2013年内认租的客户将根据租赁面积大小享有6-12个月的免租期免租期优惠："2013年内认租的客户将根据租赁面积大小享有</p></li>
                        <li><a href="#"><img src="images/ds_img1.png" /></a><a href="#">租金优惠：2013年12月31日前签约客户享受租金6折</a><p>免租期优惠："2013年内认租的客户将根据租赁面积大小享有6-12个月的免租期免租期优惠："2013年内认租的客户将根据租赁面积大小享有</p></li>-->
                    </ul>
                </div>
                <p class="btnSide">
                    <b class="btn_lf"></b>
                    <b class="btn_rt"></b>
                </p>
            </div>
            
        </div> 
        <!--漂浮块-->
        <div class="floatBox pos1">
            <img src="images/s16.png" class="fb17" />
            <img src="images/s9.png" class="fb18" />
            <img src="images/s14.png" class="fb19" />
            <img src="images/s15.png" class="fb20" /> 
            <img src="images/s20.png" class="fb23" /> 
        </div>
    </div>
    <!--4--> 	
    <div class="contbox">
        <div class="ds_bg1">
            <h3 class="title tit_al"><i class="ico_al"></i>案例分享</h3>
            <!--滚动内容-->
            <div class="slide slide_ct">        	
                <div class="slide_w">
                    <ul class="slide_c slide_list">
                    	<?php
                    		$jj_exp = $db->rows_key('select *from info_experience where type_id = 4 order by edittime desc ');
                    		if(is_array($jj_exp)){
                        		foreach($jj_exp as $i=>$irs){
                    	?>
                       	<li><a href="#" data="<?php echo $irs['id']; ?>" type="info_experience"><img src="<?php echo $irs['path'];?>" /></a><a href="#" data="<?php echo $irs['id']; ?>" type="info_experience"><?php echo $irs['title'];?></a><p><?php echo $fc->shortStr($irs['info'],68,false,true);?></p></li>
                        <?php }} ?>
                    </ul>
                </div>
                <p class="btnSide">
                    <b class="btn_lf"></b>
                    <b class="btn_rt"></b>
                </p>
            </div>
            
        </div>
        <!--漂浮块-->
        <div class="floatBox pos1">
            <img src="images/s13.png" class="fb8" />
            <img src="images/s10.png" class="fb9" id="db2" />
            <img src="images/s12.png" class="fb10" />
            <img src="images/s14.png" class="fb11" />
            <img src="images/s15.png" class="fb12" />
        </div>
    </div>
    <!--5--> 	
    <div class="contbox">
        <div class="dt1 ds_bg4 pr">
        	<?php
        		$discuss = $db->rows_key("select *from info_discuss where hot=1 order by edittime limit 1");
        		if(is_array($discuss)){
        			foreach($discuss as $i=>$irs){
        		
        	?>
        	<h3 class="title tit_tl"><i class="ico_tl"></i><?php echo $irs['name'];?>话题讨论</h3>
        	<div class="dt_bar pr">
            	<a href="#"><img src="<?php echo $irs['path'];?>" /></a>
                <p class="bg_tm"></p>
                <a href="#" class="dt_t"><?php echo $irs['title'];?></a>  
            </div>
           	
            <div class="sc_ds scrollWrap">
                <div class="scrollInfo pa sc_ds_info"> 
                	<h4><?php echo $irs['title'];?></h4>
                    <p><?php echo $irs['content'];?></p>
                    
                </div>
                <!--滚动条-->
                <div class="scroll pa"><div class="drag pa"></div></div>
            </div> 
			<?php  }}?>
            <div class="sc_dt scrollWrap">
                <ul class="list_dt pa scrollInfo">
                	 <?php
		        		$d = $db->rows_key("select *from info_discuss order by edittime");
		        		if(is_array($d)){
		        			foreach($d as $i=>$irs){
		        		
		        	?>
                    <li>
                        <p class="date"><span><?php echo $fc->show_time($irs['edittime'],12);?></span><?php echo $fc->show_time($irs['edittime'],11);?></p>
                        <a href="#"><strong><?php echo $irs['title'];?></strong><span><?php echo $fc->shortStr($irs['content'],17,false,true); ?></span></a>
                    </li>
                    <?php  } $hot_id = $irs['id'];}?>
                </ul>
                <!--滚动条-->
                <div class="scroll pa"><div class="drag pa"></div></div>
            </div>
            
            <!--评论-->
            <div class="bg_pl">
            	<textarea tipmsg="请输入你想发表的意见看法" id="t_content" class="txtfb">请输入你想发表的意见看法</textarea>
            	<input type="hidden" value="<?php echo $hot_id;?>" id="c_id"/>
                <input type="button" value="提交信息" class="btn_tj2" id="btn_tj2" />
            </div>
        </div>
        
        <!--漂浮块-->
        <div id="floatBox5" class="floatBox pos1">
            <img src="images/s16.png" class="fb17" />
            <img src="images/s9.png" class="fb18" /> 
        </div>
    </div>
</div>

<!--步骤-->
<ul class="step step_ds" id="step">
    <li><i class="s1"></i></li>
    <li><i class="s2"></i></li>
    <li><i class="s3"></i></li>
    <li><i class="s4"></i></li>
    <li><i class="s5"></i></li>
</ul>

<!--过渡色块-->
<div class="g_ds1 g_bg"><p class="spanbg"></p></div>
<div class="g_ds2 g_bg"><p class="spanbg"></p></div>
<div class="g_ds3 g_bg"><p class="spanbg"></p></div>
<div class="g_ds4 g_bg"><p class="spanbg"></p></div>


<?php include('footer.php'); ?>