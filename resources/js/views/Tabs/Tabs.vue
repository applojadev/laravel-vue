<template>
    
    <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button @click="$router.push({ name: 'tabs-home' })" class="nav-link" :class="activeClass('tabs-home')" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
                    role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">           
                <button @click="$router.push('/tabs/profile')" class="nav-link" :class="activeClass('tabs-profile')" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
                    role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item" role="presentation">
                <button @click="$router.push('/tabs/contact')" class="nav-link" :class="activeClass('tabs-contact')" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button"
                    role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
            </li>        
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="mt-5">
                <router-view></router-view>        
            </div>       
        </div>
    </div>
    
</template>

<script>

export default {

    methods: {
        activeClass: function (...names) {
            for (let name of names) {
                if (name == this.$route.name)
                    return 'active';
            }
        }
    }

}

</script>