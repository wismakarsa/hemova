<script>
import { pb } from '$lib/pocketbase.js'

if (!pb.authStore.isValid) {
        window.location.assign(`http://${window.location.host}/login`);
    } else {
        window.location.assign(`http://${window.location.host}/my/settings/profile`);
        console.log('Verified')
    }

</script>