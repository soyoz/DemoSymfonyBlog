<?php
/**
 * @author Erol Soyöz <erol@soyoz.com>
 */
 
namespace Soyoz\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('SoyozBlogBundle:Default:index.html.twig');
    }
}
