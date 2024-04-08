<div class="ui grid container">

    <div class="ui row segment" id="pageconten">

        <div class="ui wide column fourteen">

            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                    <div class="ui column wide">
                        <h3  ><?php the_title(); ?></h3>

                        <div class="content" style="border-top: solid 2px #801330;" >
                        <div style="position: relative; top:10px;">
                        <?php echo the_content(); ?>
                        </div>
                            
                        </div>
                    </div>

                <?php endwhile;
            else : ?>

            <?php endif; ?>
        </div>


    </div>
</div>