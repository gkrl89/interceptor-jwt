import React from "react";
import "./userlogin.css";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home(){

const navigate = useNavigate();

const ClickLogin = () =>
{
    navigate("/login");
}


    return(
        <>
        <div className="header">
            <h1> Home</h1>
           </div>
           <div className="body">
            <Button variant="primary" onClick = {ClickLogin} >Login</Button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis pellentesque metus, ut malesuada leo dictum vel. Sed iaculis congue diam sed pulvinar. Fusce sed nunc pharetra, auctor mi quis, volutpat odio. Nulla facilisi. Nunc vel tincidunt est. Cras vitae tortor interdum, feugiat risus non, tristique erat. Ut commodo, mauris a iaculis cursus, magna ipsum finibus nisl, nec finibus diam neque quis dui. Nulla volutpat sem ut commodo finibus. Sed feugiat, ipsum a bibendum iaculis, tortor dui fringilla mi, vitae ultricies lectus leo congue turpis. Donec scelerisque lacinia purus, eu ornare justo finibus a. Nullam et leo ac odio volutpat cursus euismod sed felis.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique dignissim nibh, et rhoncus sapien faucibus vel. Aliquam erat volutpat. Nunc iaculis ultricies viverra. Proin finibus velit a enim ultricies, posuere condimentum tortor convallis. In ex nisi, lobortis volutpat tortor sit amet, mattis placerat orci. Mauris finibus interdum placerat. Suspendisse cursus purus in lorem varius, in iaculis leo suscipit.

Donec eleifend, metus nec efficitur feugiat, sem ligula interdum ligula, sit amet interdum nunc lorem quis leo. Suspendisse condimentum, elit et molestie pulvinar, metus magna faucibus libero, sit amet malesuada lectus nunc in est. Duis tincidunt sit amet lacus vitae sagittis. Aliquam sem neque, placerat id nisi ut, commodo faucibus metus. Maecenas id ornare arcu, rutrum ullamcorper nulla. Suspendisse laoreet enim quis metus feugiat, a iaculis lacus mollis. Sed tincidunt massa eu velit ornare, sit amet luctus urna convallis. Mauris ut arcu sodales odio malesuada iaculis. Suspendisse potenti. Aliquam faucibus nisl id turpis rhoncus, vulputate laoreet neque porta. Fusce justo velit, tempor vitae pulvinar eu, convallis eget ligula. Aliquam vel enim rhoncus leo blandit elementum vel id turpis.

Aenean ut sapien placerat tellus venenatis imperdiet. Donec hendrerit, tortor eu fringilla luctus, ante leo pulvinar lacus, sit amet auctor magna nunc sit amet risus. Donec semper ultrices purus, pharetra faucibus augue volutpat vitae. Morbi massa erat, iaculis eget sollicitudin id, maximus non metus. Morbi ultrices at elit sed bibendum. Curabitur sit amet nisi nibh. Nullam maximus tempor semper. Curabitur ultricies tortor dui, sagittis fringilla quam consequat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vestibulum non sapien ac scelerisque. Aenean laoreet nibh mi, eget volutpat nunc dictum aliquet. Sed consectetur ligula enim, eget faucibus felis accumsan id. Maecenas viverra imperdiet nisi eget hendrerit. Morbi augue mi, placerat et sem vel, facilisis congue enim. Duis lectus nulla, eleifend dignissim efficitur at, vestibulum sit amet lacus. Nullam sed leo mollis, hendrerit urna vel, maximus odio.


</p><p>Vivamus quis lacinia ex, id porta tellus. In hac habitasse platea dictumst. Nam risus odio, accumsan et egestas eget, blandit vel diam. Nullam blandit, lacus ac dignissim rutrum, tortor nibh gravida lorem, et porttitor libero nulla ut orci. Phasellus feugiat ligula ut orci eleifend commodo. Etiam pulvinar aliquet aliquam. Vestibulum laoreet metus non maximus scelerisque. Quisque aliquet mauris id erat semper feugiat. Cras dignissim, urna vel pretium rutrum, libero erat aliquam lorem, sit amet efficitur libero felis non lorem. Curabitur dictum non neque sed egestas.

Maecenas varius, ligula quis pharetra mattis, sapien lacus commodo libero, vitae vehicula risus turpis in felis. Maecenas ut nisi sed libero molestie volutpat nec semper sapien. Vestibulum dictum condimentum erat id sodales. Integer quis rutrum turpis, a molestie est. Aliquam dui massa, condimentum id nisi fringilla, interdum suscipit sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque cursus nisi cursus sapien dignissim aliquet.
</p>
            </div>
            </>
    )
}