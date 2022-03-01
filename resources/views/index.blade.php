@extends('layouts.app')

@section('content')
    <div id="js-particles"></div>
    <div class="title">
        <div class="background-darkgreen">
            <img src="{{ asset('img/corporate1.png') }}" alt="" class="title-image">
            <div class="text-center pt-title">
                <h1 class="fs5vw">Concilium Societatis</h1>
                <h2 class="fs3vw ">-ITで、社会を支えるカンパニー-</h2>
            </div>
        </div>
    </div>
    <div id="nav"></div>
    <div id="fb-root"></div>
@endsection

@section('script')
<script src="{{ asset('js/particles.min.js') }}"></script>
<script src="{{ asset('js/init.js') }}"></script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
@endsection