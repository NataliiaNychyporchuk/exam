<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/exam/templates/flag.html.twig */
class __TwigTemplate_64ff9a335ca14ab392ae302c3a0b5b1741edd899ff595f67c9354497d811a9d0 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        ob_start(function () { return ''; });
        // line 2
        echo "  ";
        // line 3
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("flag/flag.link"), "html", null, true);
        echo "

  ";
        // line 6
        echo "  ";
        if ((($context["action"] ?? null) == "unflag")) {
            // line 7
            echo "    ";
            $context["action_class"] = "action-unflag";
            // line 8
            echo "    ";
            $context["icon_class"] = "fa fa-heart-o";
            // line 9
            echo "  ";
        } else {
            // line 10
            echo "    ";
            $context["action_class"] = "action-flag";
            // line 11
            echo "    ";
            $context["icon_class"] = "fa fa-heart";
            // line 12
            echo "  ";
        }
        // line 13
        echo "
  ";
        // line 15
        echo "  ";
        $context["classes"] = [0 => "flag", 1 => ("flag-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 17
($context["flag"] ?? null), "id", [], "method", false, false, true, 17), 17, $this->source))), 2 => ((("js-flag-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 18
($context["flag"] ?? null), "id", [], "method", false, false, true, 18), 18, $this->source))) . "-") . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["flaggable"] ?? null), "id", [], "method", false, false, true, 18), 18, $this->source)), 3 =>         // line 19
($context["action_class"] ?? null)];
        // line 21
        echo "
  ";
        // line 23
        echo "  ";
        $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "setAttribute", [0 => "rel", 1 => "nofollow"], "method", false, false, true, 23);
        // line 24
        echo "  <div class=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_join_filter($this->sandbox->ensureToStringAllowed(($context["classes"] ?? null), 24, $this->source), " "), "html", null, true);
        echo "\"><a";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 24, $this->source), "html", null, true);
        echo "><i class=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["icon_class"] ?? null), 24, $this->source), "html", null, true);
        echo "\" aria-hidden=\"true\"></i></a></div>
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    public function getTemplateName()
    {
        return "themes/custom/exam/templates/flag.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  85 => 24,  82 => 23,  79 => 21,  77 => 19,  76 => 18,  75 => 17,  73 => 15,  70 => 13,  67 => 12,  64 => 11,  61 => 10,  58 => 9,  55 => 8,  52 => 7,  49 => 6,  43 => 3,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/exam/templates/flag.html.twig", "/var/www/exam/web/themes/custom/exam/templates/flag.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("spaceless" => 1, "if" => 6, "set" => 7);
        static $filters = array("escape" => 3, "clean_class" => 17, "join" => 24);
        static $functions = array("attach_library" => 3);

        try {
            $this->sandbox->checkSecurity(
                ['spaceless', 'if', 'set'],
                ['escape', 'clean_class', 'join'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
