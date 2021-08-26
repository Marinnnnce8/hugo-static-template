---
template: home
weight: 1
title: "Home"
append: "posts"
append: "banner"
---

{{< banner title="Homepage" >}}

<section class='uk-margin-large-top'>
    <div class='uk-container uk-container-large'>
        <h2>Posts</h2>
        {{< posts >}}
    </div>
</section>